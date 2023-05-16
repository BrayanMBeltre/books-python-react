from tortoise.models import Model
from tortoise import fields


class Page(Model):
    book = fields.ForeignKeyField("models.Book", related_name="pages")
    page_number = fields.IntField(max_length=255)
    text = fields.TextField()
    html = fields.TextField()

    def __str__(self):
        return self.book + self.page_number
