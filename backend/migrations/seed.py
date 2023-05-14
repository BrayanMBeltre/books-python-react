from backend.models.book import Book
from backend.models.page import Page


def seed():
    book1 = Book.create(title="Book 1", author="Author 1")
    book2 = Book.create(title="Book 2", author="Author 2")

    for i in range(1, 11):
        Page.create(
            book=book1,
            page_number=i,
            text=f"This is page {i} of Book 1",
            html=f"<h1>Page {i}</h1><p>This is page {i} of Book 1</p>",
        )
        Page.create(
            book=book2,
            page_number=i,
            text=f"This is page {i} of Book 2",
            html=f"<h1>Page {i}</h1><p>This is page {i} of Book 2</p>",
        )
