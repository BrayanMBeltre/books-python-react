from peewee import IntegerField
from playhouse.migrate import migrate
from backend.db import migrator

migrate(
    migrator.add_column("book", "published_year", IntegerField(default=0)),
)
