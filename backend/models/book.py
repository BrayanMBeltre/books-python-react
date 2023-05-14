from peewee import Model, CharField


class Book(Model):
    title = CharField()
    author = CharField()
