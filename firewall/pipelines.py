# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
from scrapy import signals
from scrapy.exporters import JsonItemExporter
from scrapy.utils.python import to_bytes

class NewJsonItemExporter(JsonItemExporter):
    def export_item(self, item):
        if self.first_item:
            self.first_item = False
        else:
            self.file.write(b',')
            self._beautify_newline()
        # itemdict = dict(self._get_serialized_fields(item))
        data = self.encoder.encode(item)
        self.file.write(to_bytes(data, self.encoding))


class FirewallPipeline:

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        pipe = cls(*args, **kwargs)
        crawler.signals.connect(pipe.spider_opened, signal=signals.spider_opened)
        crawler.signals.connect(pipe.spider_closed, signal=signals.spider_closed)
        return pipe

    def process_item(self, item, spider):
        self.itemexport.export_item(item["item"])

    def spider_closed(self, spider, reason):
        self.itemexport.finish_exporting()
        self.json_file.close()

    def spider_opened(self, spider):
        self.json_file = open("base.json","wb+")
        self.itemexport = NewJsonItemExporter(self.json_file,ensure_ascii=False)
        self.itemexport.start_exporting()


class QaxPipeline(FirewallPipeline):

    def process_item(self, item, spider):
        self.itemexport.export_item(item)
        return {}

