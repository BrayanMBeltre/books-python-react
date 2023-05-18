from peewee import SqliteDatabase

from playhouse.migrate import SqliteMigrator

db = SqliteDatabase("coco.db")
migrator = SqliteMigrator(db)
