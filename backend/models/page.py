from backend.models.base import BaseModel
from peewee import ForeignKeyField, IntegerField, TextField

from backend.models.book import Book


class Page(BaseModel):
    book = ForeignKeyField(Book, backref="pages")
    number = IntegerField()
    txt = TextField()
    html = TextField()
