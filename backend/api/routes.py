from http.server import (
    BaseHTTPRequestHandler,
)
import json
import re
from backend.api.handlers.books import (
    single_book_handler,
    all_books_handlers,
)
from backend.api.handlers.pages import (
    single_book_page_handler,
    book_pages_handlers,
)

routes = {
    "/api/books/([0-9]+)/pages/([0-9]+)(?:/([A-Za-z]+))?": single_book_page_handler,
    "/api/books/([0-9]+)/pages(?:/([A-Za-z]+))?": book_pages_handlers,
    "/api/books/([0-9]+)": single_book_handler,
    "/api/books": all_books_handlers,
}


class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        for (
            path,
            handler,
        ) in routes.items():
            match = re.match(path, self.path)
            if match:
                response = handler(self, *match.groups())
                self.send_response(200)
                self.send_header(
                    "Content-type",
                    "application/json",
                )
                self.end_headers()
                self.wfile.write(json.dumps(response).encode())
                break
        else:
            self.send_response(404)
            self.end_headers()
            self.wfile.write(b"404 Not Found")
