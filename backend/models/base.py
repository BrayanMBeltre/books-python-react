from peewee import SqliteDatabase, Model

db = SqliteDatabase("library.db")


class BaseModel(Model):
    class Meta:
        database = db
