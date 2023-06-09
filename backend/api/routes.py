from http.server import BaseHTTPRequestHandler
import json
import re
from backend.api.handlers.books import (
    single_book_handler,
    all_books_handlers,
)
from backend.api.handlers.documentation import documentation
from backend.api.handlers.pages import (
    single_book_page_handler,
    book_pages_handlers,
)

routes = {
    "/api/books/([0-9]+)/pages/([0-9]+)(?:/([A-Za-z]+))?": single_book_page_handler,
    "/api/books/([0-9]+)/pages(?:/([A-Za-z]+))?": book_pages_handlers,
    "/api/books/([0-9]+)": single_book_handler,
    "/api/books": all_books_handlers,
    "/api": documentation,
}


class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        for path, handler in routes.items():
            match = re.match(path, self.path)
            if match:
                response = handler(self, *match.groups())
                self.send_response(200)
                self.send_header("Content-type", "application/json")
                self.send_header(
                    "Access-Control-Allow-Origin", "*"
                )  # Allow requests from any origin
                self.send_header(
                    "Access-Control-Allow-Methods", "GET"
                )  # Allow only GET requests
                self.send_header(
                    "Access-Control-Allow-Headers", "Content-type"
                )  # Allow only Content-type header
                self.end_headers()
                self.wfile.write(json.dumps(response).encode())
                break
        else:
            self.send_response(404)
            self.send_header("Content-type", "application/json")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            response = {"error": "Route not found"}
            self.wfile.write(json.dumps(response).encode())
