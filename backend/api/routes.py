from backend.api.server import Route


@Route("/books")
def list_books(handler):
    # TODO: implement
    handler.json_response({"message": "list books"})


@Route("/books/<int:id>")
def get_book(handler):
    # TODO: implement
    handler.json_response({"book": handler.route_params["id"]})


@Route("/books/<int:id>/pages/<int:page>/<format>")
def read_page(handler):
    # TODO: implement
    handler.json_response(
        {
            "book": handler.route_params["id"],
            "format": handler.route_params["format"],
            "page": handler.route_params["page"],
            "query_params": handler.query_params,
        }
    )
