from backend.models.book import Book


async def all_books_handlers(request):
    if request.command == "GET":
        books = await Book.all().values()
        response = {"message": books}
        return response
    else:
        return {"error": "Invalid request method."}


def single_book_handler(request, book_id):
    if request.command == "GET":
        response = {"book_id": book_id}
        return response
    else:
        return {"error": "Invalid request method."}
