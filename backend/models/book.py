from peewee import CharField, PrimaryKeyField
from backend.models.base import BaseModel


class Book(BaseModel):
    id = PrimaryKeyField()
    title = CharField()
    author = CharField()
