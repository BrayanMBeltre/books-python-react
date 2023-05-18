from backend.models.book import Book
from playhouse.shortcuts import model_to_dict

from backend.models.page import Page


def all_books_handlers(request):
    if request.command == "GET":
        books = Book.select()
        book_list = []

        for book in books:
            pages = Page.select().where(Page.book == book)
            total_pages = len(pages)
            book_dict = model_to_dict(book)
            book_dict["total_pages"] = total_pages
            book_list.append(book_dict)

        return book_list
    else:
        return {"error": "Invalid request method."}


def single_book_handler(request, book_id):
    if request.command == "GET":
        book = Book.get(Book.id == book_id)
        pages = Page.select().where(Page.book == book_id)
        total_pages = len(pages)

        book_dict = model_to_dict(book)
        book_dict["total_pages"] = total_pages

        return book_dict
    else:
        return {"data": "Invalid request method."}
