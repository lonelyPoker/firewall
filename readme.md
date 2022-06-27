## FireWall Web Crawler

### 项目简述
`【奇安信\深信服】安全防火墙日志文件抓取脚本`

### 目录结构

```
firewall
    │  items.py
    │  middlewares.py
    │  pipelines.py
    │  settings.py
    │
    ├─js
    │      encrypt-dom.js
    │      sxf-AF-8.0.45.js
    │
    └─spiders
            qax.py
            sangfor.py
            __init__.py
```

* **JS(JavaScript加密脚本)**
  * *encrypt-dom.js*

    `沿用老版本dom文档内容加密function`
  * *sxf-AF-8.0.45.js*

    `深信服防火墙8.0.45新版本webpack加密lib`
* **spiders(scrapy爬虫脚本)**
  * *qax.py*

    `奇安信防火墙日志爬虫脚本`
  * *sangfor*

    `深信服防火墙日志爬虫脚本`

### 运行环境

1. python3.8+
2. nodejs (v16.13.0)

### 依赖包安装

1. ` pip install -r requirement.txt -i https://pypi.tuna.tsinghua.edu.cn/simple/`

### 运行

1. **奇安信**

   `scrapy crawl qax`
2. **深信服**

   `scrapy crawl sangfor`

### 注意事项
```bash
1.防火墙web IP地址需要替换
2.登录凭证信息需要替换
3.需要根据需求重新构造 build_payload
4.防火墙日志导出文件默认是 base.json
```

### 个人声明
```bash
# 所有内容仅供学习交流，严禁用于商业用途、非法用途，否则由此产生的一切后果均与作者无关。
```