from peewee import Model, TextField, IntegerField, ForeignKeyField

from .book import Book


class Page(Model):
    book = ForeignKeyField(Book, backref="pages")
    page_number = IntegerField()
    text = TextField()
    html = TextField()
