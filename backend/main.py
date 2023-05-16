import http.server

from tortoise import run_async

from backend.api.routes import Handler
from backend.db import database


def run(
    server_class=http.server.HTTPServer,
    handler_class=Handler,
    port=8000,
):
    server_address = ("", port)
    httpd = server_class(server_address, handler_class)
    print(f"Server running on {port} ✨✨✨")
    httpd.serve_forever()


if __name__ == "__main__":
    run_async(database())
    run()
