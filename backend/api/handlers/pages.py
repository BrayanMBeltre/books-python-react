def book_pages_handlers(request, book_id: str):
    if request.command == "GET":
        response = {"message": "All pages", "book_id": book_id}
        return response
    else:
        return {"error": "Invalid request method."}


def single_book_page_handler(request, book_id, page_id, format=None):
    if format is None:
        format = "txt"

    if request.command == "GET":
        response = {"book_id": book_id, "page_id": page_id, "format": format}
        return response
    else:
        return {"error": "Invalid request method."}
