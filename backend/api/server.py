from http.server import BaseHTTPRequestHandler
import json
import re
import urllib.parse

routes = {}


# Define a route decorator that adds routes to the routes dictionary
def route(path, methods=["GET"]):
    def decorator(handler):
        def wrapper(*args, **kwargs):
            handler(*args, **kwargs)

        # Use regular expressions to convert the path into a pattern that matches dynamic parameters
        pattern = re.sub("<(\w+):(\w+)>", r"(?P<\1>\2)", path)
        pattern = re.compile("^{}$".format(pattern))

        # Add the route pattern and its handler function to the routes dictionary
        routes[pattern] = wrapper
        wrapper.methods = methods

        return wrapper

    return decorator


class CustomRequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        parsed_url = urllib.parse.urlparse(self.path)
        route = parsed_url.path
        query_params = urllib.parse.parse_qs(parsed_url.query)

        # Loop through the routes in the dictionary
        for route_pattern, handler in routes.items():
            # Use regular expressions to match the route pattern to the current route
            match = re.match(route_pattern, route)
            if match:
                # Extract the dynamic parameters from the route
                route_params = match.groupdict()

                # Call the handler function for the specified route
                handler(self, query_params, **route_params)
                return

        # If no route matches, return a 404 error
        self.send_response(404)
        self.send_header("Content-type", "text/plain")
        self.end_headers()
        self.wfile.write(b"404 Not Found")

    @route("/books/<int:book_id>", methods=["GET"])
    def get_book_details(self, book_id):
        # Retrieve the book details from the database
        # ...

        # Return the book details as a JSON response
        response = {"id": "book_id", "title": "book.title", "author": "book.author"}
        self.send_response(200)
        self.send_header("Content-type", "application/json")
        self.end_headers()
        self.wfile.write(json.dumps(response).encode("utf-8"))
