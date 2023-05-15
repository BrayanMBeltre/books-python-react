import json
from backend.api.server import route


books = [{"id": 1, "title": "Book 1"}, {"id": 2, "title": "Book 2"}]


@route("/books")
def get_books(self, request, params):
    response_body = json.dumps(self.books)
    return self._create_response(response_body, content_type="application/json")
