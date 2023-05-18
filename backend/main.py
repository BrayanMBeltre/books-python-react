import http.server
from backend.api.routes import Handler


def run(port=8000):
    server_address = ("", port)
    httpd = http.server.HTTPServer(server_address, Handler)
    print(f"Server running on {port} 🥥")
    httpd.serve_forever()


if __name__ == "__main__":
    run()
