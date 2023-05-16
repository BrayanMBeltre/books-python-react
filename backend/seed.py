from backend.db import database
from backend.models.book import Book
from backend.models.page import Page


async def seed_database():
    # Create books
    book1 = await Book.create(title="Book 1", author="Author 1")
    book2 = await Book.create(title="Book 2", author="Author 2")

    # Create pages for book1
    await Page.create(
        book=book1,
        page_number=1,
        text="Page 1 of Book 1",
        html="<p>Page 1 of Book 1</p>",
    )
    await Page.create(
        book=book1,
        page_number=2,
        text="Page 2 of Book 1",
        html="<p>Page 2 of Book 1</p>",
    )
    await Page.create(
        book=book1,
        page_number=3,
        text="Page 3 of Book 1",
        html="<p>Page 3 of Book 1</p>",
    )

    # Create pages for book2
    await Page.create(
        book=book2,
        page_number=1,
        text="Page 1 of Book 2",
        html="<p>Page 1 of Book 2</p>",
    )
    await Page.create(
        book=book2,
        page_number=2,
        text="Page 2 of Book 2",
        html="<p>Page 2 of Book 2</p>",
    )
    await Page.create(
        book=book2,
        page_number=3,
        text="Page 3 of Book 2",
        html="<p>Page 3 of Book 2</p>",
    )

    # Close database connection
    await database.close()
