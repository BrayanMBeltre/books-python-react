from tortoise import Tortoise


async def database():
    # Here we create a SQLite DB using file "db.sqlite3"
    #  also specify the app name of "models"
    #  which contain models from "app.models"
    await Tortoise.init(
        db_url="sqlite://db.sqlite3",
        modules={"models": ["backend.models.book"]},
    )
