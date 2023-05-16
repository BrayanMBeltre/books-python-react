from peewee import Model, PrimaryKeyField

from backend import db


class BaseModel(Model):
    id = PrimaryKeyField()

    class Meta:
        database = db.db
