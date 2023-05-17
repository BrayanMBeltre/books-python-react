from peewee import SqliteDatabase

from playhouse.migrate import SqliteMigrator

# Configure the database connection
db = SqliteDatabase("database.db")
migrator = SqliteMigrator(db)
