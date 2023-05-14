from http.server import HTTPServer
from backend.api.routes import get_book, list_books, read_page

from backend.api.server import MyHandler


if __name__ == "__main__":
    MyHandler.routes = [list_books, get_book, read_page]
    server = HTTPServer(("localhost", 8000), MyHandler)
    print("Server listening on http://localhost:8000/")
    server.serve_forever()
