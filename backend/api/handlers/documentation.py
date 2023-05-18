import json
import os


def documentation(request):
    if request.command == "GET":
        document_name = "../documentation.postman_collection.json"
        file_path = os.path.join(
            os.path.dirname(__file__),
            document_name,
        )

        try:
            with open(file_path, "r") as file:
                json_data = json.load(file)
                return json_data
        except FileNotFoundError:
            return {"error": "JSON file not found."}
        except json.JSONDecodeError:
            return {"error": "Invalid JSON file."}
    else:
        return {"error": "Invalid request method."}
