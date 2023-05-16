from tortoise.models import Model
from tortoise import fields


class Book(Model):
    id = fields.IntField(pk=True)
    title = fields.CharField(max_length=255)
    author = fields.CharField(max_length=255)

    def __str__(self):
        return self.title
