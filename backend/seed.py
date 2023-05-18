from faker import Faker

from backend.models.book import Book
from backend.models.page import Page


fake = Faker()

NUM_BOOKS = 10
NUM_PAGES_PER_BOOK = 10


def seed_data(num_books, pages_per_book):
    # Create multiple books
    books_data = []
    for _ in range(num_books):
        book_data = {"title": fake.sentence(), "author": fake.name()}
        books_data.append(book_data)

    for book_data in books_data:
        book = Book.create(**book_data)

        # Create pages for each book
        pages_data = []
        for page_number in range(1, pages_per_book):
            page_data = {
                "book": book,
                "number": page_number,
                "txt": fake.paragraph(),
                "html": f"<p>{fake.paragraphs()}</p>",
            }
            pages_data.append(page_data)

        for page_data in pages_data:
            Page.create(**page_data)


seed_data(NUM_BOOKS, NUM_PAGES_PER_BOOK)
print("Seeding completed successfully ✅")
