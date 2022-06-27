import scrapy
from scrapy.http import JsonRequest
from scrapy.http import HtmlResponse
from scrapy.http.cookies import CookieJar
from scrapy import signals

from jsonpath import jsonpath

import hashlib
from base64 import b64encode
from operator import eq


class QaxSpider(scrapy.Spider):
    localhost = 'xxx.xxx.xxx'   # TODO: ip address
    name = 'qax'
    allowed_domains = [localhost]
    start_urls = ['https://{}/createcode/'.format(localhost)]

    custom_settings = {
        "PASSWORD": "xxxxxx",
        "USERNAME": "xxxxxx",
        "LOGIN_API": "https://{}/login/".format(localhost),
        "ITEM_PIPELINES": {
            'firewall.pipelines.QaxPipeline': 300
        },
        "PATCH_SIZE": 15
    }

    def _set_crawler(self, crawler):
        self.crawler = crawler
        self.settings = crawler.settings
        self.password = crawler.settings.get("PASSWORD")
        self.username = crawler.settings.get("USERNAME")
        self.loginapi = crawler.settings.get("LOGIN_API")
        self.patch_size = crawler.settings.getint("PATCH_SIZE")
        crawler.signals.connect(self.close, signals.spider_closed)

    def start_requests(self):
        for url in self.start_urls:
            yield JsonRequest(url=url, data={})

    def parse(self, response: HtmlResponse):
        valid_json = response.json()
        code = valid_json.get("code")
        _hash = hashlib.md5(code.encode())
        login_code = _hash.hexdigest()
        yield scrapy.FormRequest(url=self.loginapi, formdata={
            "username_encode": b64encode(self.username.encode()),
            "password_encode": b64encode(self.password.encode()),
            "code": code,
            "optionsRadios": "zh_CN",
            "langtype": "zh_CN",
            "login_code": login_code,
        }, callback=self.login_response)

    def login_response(self, response: HtmlResponse):

        querystring = {
            "iDisplayStart": "0",
            "iDisplayLength": str(self.patch_size),
        }
        log_query = response.urljoin("/logsystem/logviewer/query")
        yield scrapy.FormRequest(method="GET",
                                 url=log_query,
                                 formdata=querystring,
                                 callback=self.query_log_response)

    def query_log_response(self, response: HtmlResponse):
        log_json = response.json()
        total_records = log_json.get("iTotalRecords")
        epoch = self.calculate_pagenation(total_records, self.patch_size)
        for epo in range(1, epoch+1):
            querystring = {
                "iDisplayStart": str(self.patch_size * epo),
                "iDisplayLength": str(self.patch_size),
            }
            log_query = response.urljoin("/logsystem/logviewer/query")
            yield scrapy.FormRequest(method="GET",
                                     url=log_query,
                                     formdata=querystring,
                                     callback=self.next_query_log_response)

        ids = jsonpath(log_json, "$.aaData[*].0")
        details_api = response.urljoin("/logsystem/logviewer/details")
        csrf_token = self._extract_csrf_token("csrf_token", response)
        for _id in ids:
            yield scrapy.FormRequest(
                url=details_api,
                formdata={"ids": str(_id)},
                callback=self.detail_response,
                headers={"X-CSRFToken": csrf_token}
            )

    def detail_response(self, response: HtmlResponse):
        yield response.json()

    def next_query_log_response(self, response: HtmlResponse):
        log_json = response.json()
        ids = jsonpath(log_json, "$.aaData[*].0")
        details_api = response.urljoin("/logsystem/logviewer/details")
        csrf_token = self._extract_csrf_token("csrf_token", response)
        for _id in ids:
            yield scrapy.FormRequest(
                url=details_api,
                formdata={"ids": str(_id)},
                callback=self.detail_response,
                headers={"X-CSRFToken": csrf_token}
            )
        pass

    def _extract_csrf_token(self, cookie_key: str, response: HtmlResponse) -> str:
        jar = CookieJar()
        jar.extract_cookies(response, response.request)
        for cookie_jar in jar:
            if eq(cookie_key, cookie_jar.name):
                return cookie_jar.value

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
