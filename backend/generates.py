from backend import db
from backend.models.book import Book
from backend.models.page import Page


db.db.create_tables([Book, Page])

print("Database created successfully ✅")
