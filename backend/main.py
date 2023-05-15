from http.server import HTTPServer

from backend.api.server import CustomRequestHandler


if __name__ == "__main__":
    httpd = HTTPServer(("localhost", 8000), CustomRequestHandler)
    print("Server listening on http://localhost:8000/")
    httpd.serve_forever()
