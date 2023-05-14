from backend.migrations.seed import seed
from backend.models.base import BaseModel
from backend.models.book import Book
from backend.models.page import Page


def migrate():
    BaseModel.Meta.database.create_tables([Book, Page])
    seed()
