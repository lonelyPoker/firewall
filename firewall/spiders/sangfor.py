import scrapy
from scrapy.http import HtmlResponse
from scrapy.http import JsonRequest
from scrapy.signals import spider_closed


import execjs
from parsel.selector import Selector
from ddddocr import DdddOcr
from jsonpath import jsonpath

import cv2
from PIL import Image
import numpy as np


import time
from io import BytesIO
from typing import Any
from os.path import join
from os.path import dirname
from hashlib import md5
from base64 import b64decode


class SangforSpider(scrapy.Spider):
    localhost = 'xxx.xxx.xxx'   # TODO: ip address
    name = 'sangfor'
    start_urls = ['https://{}/'.format(localhost)]

    custom_settings = {
        "PASSWORD":"xxxxxx",
        "USERNAME":"xxxxxx",
        "PATCH_SIZE":50,
        "EVALJS_DIR":"js",
        "LANUCH_API":"https://{}/dcweb/launch.php".format(localhost),
        "FRAMEWORK_URL":"https://{}/framework.php".format(localhost),
        "LOGIN_CGI": "https://{}/cgi-bin/login.cgi".format(localhost),
        "ITEM_PIPELINES":{
            "firewall.pipelines.FirewallPipeline": 300
        }
    }
    def _set_crawler(self, crawler):
        self.crawler = crawler
        self.settings = crawler.settings
        self.evaljs_dir = crawler.settings.get("EVALJS_DIR")
        self.password = crawler.settings.get("PASSWORD")
        self.username = crawler.settings.get("USERNAME")
        self.login_cgi = crawler.settings.get("LOGIN_CGI")
        self.lanuch_cgi = crawler.settings.get("LANUCH_API")
        self.frame_url = crawler.settings.get("FRAMEWORK_URL")
        self.patch_size = crawler.settings.getint("PATCH_SIZE")
        
        self.ddocr = DdddOcr(show_ad=False)
        crawler.signals.connect(self.close, spider_closed)

    def parse(self, response: HtmlResponse):
        key = response.xpath("//script/text()").re_first("var key = (.*?);")
        encrypt_document = response.xpath(
            "//script/text()").re_first("document.write\([A-Z]+\('(.*?)',key\)\);")
        source = self._read_resource("encrypt-dom.js")
        plain_document = self._eval_resource(
            source, funcname="decrypt_document", params=[encrypt_document, eval(key)])
        plain_selector = Selector(text=plain_document)
        self.ras_key = plain_selector.xpath(
            "//script").re_first('rsa_key:"(.*?)"')

        timestamp = int(round(time.time() * 1000))
        captcha_image_url = response.urljoin(
            "/captcha.php?{}".format(timestamp))
        yield scrapy.Request(url=captcha_image_url, callback=self.captcha_binary_resource)

    def _read_resource(self, filename) -> str:
        basepath = dirname(dirname(__file__))
        relfth = join(basepath, self.evaljs_dir, filename)
        with open(relfth, encoding="utf-8") as fh:
            return fh.read()

    def _eval_resource(self, source: str, **kwargs) -> Any:
        fcname = kwargs.get("funcname")
        params = kwargs.get("params")
        context = execjs.compile(source=source)
        return context.call(fcname, *params)

    def _show_image(self, bts: bytes):
        bytes_stream = BytesIO(bts)
        capture_img = Image.open(bytes_stream)
        capture_img = cv2.cvtColor(np.asarray(capture_img), cv2.COLOR_RGB2BGR)
        cv2.imshow("capture_img", capture_img)
        cv2.waitKey(0)

    def captcha_binary_resource(self, response: HtmlResponse):
        # self._show_image(response.body)  # 查看验证码图片
        captcha_label = self.ddocr.classification(response.body)
        print("captcha_label:{}".format(captcha_label))
        source = self._read_resource("sxf-AF-8.0.45.js")
        encrypt_cipher = self._eval_resource(source, funcname="rsa_encrypt", params=[
                                             self.ras_key, self.password])
        manage_cipher = self._eval_resource(source, funcname="rsa_encrypt", params=[
                                            self.ras_key, "WEBCONSOLE"])
        build_payload = {
            "opr": "login",
            "data": {
                "user": "admin",
                "pwd": encrypt_cipher,
                "vericode": captcha_label,
                "privacy_enable": 1,
                "manage_mode": manage_cipher
            }}

        yield JsonRequest(url=self.login_cgi, data=build_payload, callback=self.login_in_response)

    def login_in_response(self, response: HtmlResponse):
        verify_json = response.json()
        login_status = verify_json.get("success")
        if login_status:
            yield scrapy.Request(url=self.frame_url, callback=self.visit_in_response)
        else:
            timestamp = int(round(time.time() * 1000))
            captcha_image_url = response.urljoin(
                "/captcha.php?{}".format(timestamp))
            yield scrapy.Request(url=captcha_image_url, callback=self.captcha_resource)

    def _third_hash_encrypt(self, ck_token: str) -> str:
        _hash = md5(ck_token.encode())
        __hash = md5(_hash.hexdigest().encode())
        ___hash = md5(__hash.hexdigest().encode()).hexdigest()
        return ___hash

    def visit_in_response(self, response: HtmlResponse):
        ck_token = response.xpath("//script").re_first('ck:"(.*?)"')
        self.cf_token = self._third_hash_encrypt(ck_token)

        build_payload = {
            "filter": {
                "startDateTime": "2022-06-01 00:00",
                "endDateTime": "2022-06-02 08:00",
                "log_type": [
                    "waf",
                    "web",
                    "ips",
                    "mail",
                    "utm",
                    "dos"
                ],
                "sourceArea": 0,
                "sourceType": "all",
                "sourceUser": "",
                "sourceGroup": "",
                "sub_group": True,
                "sourceIp": "",
                "destArea": 0,
                "destIp": "",
                "severity_t": "1|1|1|0|0",
                "action_t": "1|1",
                "type": "log_data",
                "start": 0,
                "limit": self.patch_size,
                "query_id": None,
                "search": ""
            },
            "app_args": {
                "name": "app.controller.CAllLogSearchController@af",
                "options": {}
            },
            "start": 0,
            "limit": self.patch_size,
            "query_id": None,
            "cf": self.cf_token,
            "module": "/mod_monitor/log/security_log/index"
        }
        yield JsonRequest(url=self.lanuch_cgi, data=build_payload, callback=self.lanuch_response)

    def lanuch_response(self, response: HtmlResponse):
        verify_json = response.json()
        login_status = verify_json.get("success")
        if login_status:
            log_datas = jsonpath(verify_json, "$.data.log_data[*]")
            self.clean_b64encode(log_datas)
            yield {"item":log_datas}
            log_num = jsonpath(verify_json, "$.data.log_num").pop()

            # page_size = 50 
            patch_size = self.calculate_pagenation(log_num, self.patch_size)
            for index in range(1, patch_size+1):
                start = index * self.patch_size
                build_payload = {
                    "filter": {
                        "startDateTime": "2022-06-01 00:00",
                        "endDateTime": "2022-06-02 08:00",
                        "log_type": [
                            "waf",
                            "web",
                            "ips",
                            "mail",
                            "utm",
                            "dos"
                        ],
                        "sourceArea": 0,
                        "sourceType": "all",
                        "sourceUser": "",
                        "sourceGroup": "",
                        "sub_group": True,
                        "sourceIp": "",
                        "destArea": 0,
                        "destIp": "",
                        "severity_t": "1|1|1|0|0",
                        "action_t": "1|1",
                        "type": "log_data",
                        "start": start,
                        "limit": self.patch_size,
                        "query_id": None,
                        "search": ""
                    },
                    "app_args": {
                        "name": "app.controller.CAllLogSearchController@af",
                        "options": {}
                    },
                    "start": start,
                    "limit": self.patch_size,
                    "query_id": None,
                    "cf": self.cf_token,
                    "module": "/mod_monitor/log/security_log/index"
                }
                yield JsonRequest(url=self.lanuch_cgi, data=build_payload, callback=self.lanuch_next_response)

        else:
            self.log("invalid json:{}".format(verify_json))

    def clean_b64encode(self, log_datas: list):
        for log_item in log_datas:
            update_item = {}

            hex_desc_b64en = log_item.get("hex_desc")
            hex_desc_str = b64decode(hex_desc_b64en)
            update_item['hex_desc'] = hex_desc_str.decode("utf-8")

            package_b64en = log_item.get("package")
            package_str = b64decode(package_b64en)
            update_item['package'] = package_str.decode("utf-8")

            url_decode_desc_b64en = log_item.get("url_decode_desc")
            if url_decode_desc_b64en:
                url_decode_desc_str = b64decode(url_decode_desc_b64en)
                update_item['url_decode_desc'] = url_decode_desc_str.decode("utf-8")

            descript_b64en = log_item.get("descript")
            if descript_b64en:
                try:
                    descript_str = b64decode(descript_b64en)
                except:
                    update_item['descript'] = descript_b64en
                else:
                    update_item['descript'] = descript_str.decode("utf-8")

            username_b64en = log_item.get("username")
            if username_b64en:
                username_str = b64decode(username_b64en)
                update_item['username'] = username_str.decode("utf-8")

            af_password_b64en = log_item.get("af_password")
            if af_password_b64en:
                af_password_str = b64decode(af_password_b64en)
                update_item['af_password'] = af_password_str.decode("utf-8")

            log_item.update(update_item)

    def calculate_pagenation(self, number: int, page_size: int):
        number -= page_size 
        if number >= page_size > 0:
            patch_size = number // page_size
            mod_val = number % patch_size
            if mod_val > 0:
                patch_size += 1
            return patch_size
        elif number < page_size and number > 0:
            return 1
        else:
            return 0

    def lanuch_next_response(self,response:HtmlResponse):
        verify_json = response.json()
        login_status = verify_json.get("success")
        if login_status:
            log_datas = jsonpath(verify_json, "$.data.log_data[*]")
            self.clean_b64encode(log_datas)
            yield {"item":log_datas}


# 前期 -> 深信服JavaScript逆向分析 \ JavaScript截取加密可执行源代码    TODO JavaScript动态HOOK \ 更改WebPack export代码
# 后期 -> 企业级scrapy爬虫开发 \ Twisted CGI接口开发 
