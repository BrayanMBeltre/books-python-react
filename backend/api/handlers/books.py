from backend.models.book import Book
from playhouse.shortcuts import model_to_dict


def all_books_handlers(request):
    if request.command == "GET":
        books = Book.select().dicts()
        return list(books)
    else:
        return {"error": "Invalid request method."}


def single_book_handler(request, book_id):
    if request.command == "GET":
        book = Book.get(Book.id == book_id)
        return model_to_dict(book)
    else:
        return {"data": "Invalid request method."}
