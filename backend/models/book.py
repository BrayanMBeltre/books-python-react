from peewee import CharField
from backend.models.base import BaseModel


class Book(BaseModel):
    title = CharField()
    author = CharField()
