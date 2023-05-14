from http.server import BaseHTTPRequestHandler
import json
from urllib.parse import urlparse, parse_qs
import re


class Route:
    def __init__(self, path, methods=None):
        self.path = path
        self.methods = methods or ["GET"]

    def match(self, request_path):
        pattern = self.path.replace("<int:id>", r"(\d+)")
        return re.match(pattern, request_path)

    def get_params(self, request_path):
        pattern = self.path.replace("<int:id>", r"(\d+)")
        match = re.match(pattern, request_path)
        if match:
            return {"id": int(match.group(1))}
        else:
            return {}

    def __call__(self, handler):
        self.handler = handler
        return self


class MyHandler(BaseHTTPRequestHandler):
    routes = []

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.query_params = {}

    def do_GET(self):
        parsed_path = urlparse(self.path)
        self.query_params = parse_qs(parsed_path.query)

        for route in self.routes:
            if route.methods and self.command not in route.methods:
                continue

            if route.match(parsed_path.path):
                params = route.get_params(parsed_path.path)
                self.route_params = params
                route.handler(self)
                break
        else:
            self.send_error(404, "Not Found")

    def json_response(self, data):
        self.send_response(200)
        self.send_header("Content-type", "application/json")
        self.end_headers()
        self.wfile.write(json.dumps(data).encode("utf-8"))
