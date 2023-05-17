from backend.models.page import Page
from playhouse.shortcuts import model_to_dict
from peewee import DoesNotExist

valid_formats = ["txt", "html"]


def book_pages_handlers(request, book_id: str, content_format=None):
    if content_format is None:
        content_format = "txt"

    if request.command == "GET":
        if content_format not in valid_formats:
            return {"error": "Invalid content format."}

        content_field = getattr(Page, content_format)

        pages = (
            Page.select(Page.id, content_field)
            .where(Page.book == book_id)
            .dicts()
        )

        return list(pages)
    else:
        return {"error": "Invalid request method."}


def single_book_page_handler(
    request, book_id, page_id, content_format=None
):
    if content_format is None:
        content_format = "txt"

    if request.command == "GET":
        if content_format not in valid_formats:
            return {"error": "Invalid content format."}

        content_field = getattr(Page, content_format)

        try:
            page = (
                Page.select(Page.id, Page.number, Page.book, content_field)
                .where(Page.book == book_id, Page.id == page_id)
                .get()
            )

            return model_to_dict(page)
        except DoesNotExist:
            return {"error": "Page not found."}
    else:
        return {"error": "Invalid request method."}
