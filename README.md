# API BIBLIOTECA

<!-- TODO: new description -->

This is a REST API and a React App which will allow our clients to consume the list of available books, as well as to read those books page by page in the desired formats.

## Getting started

- Clone the app
- Run `chmod +x run.sh`
- Run `./run.sh init backend`
- Run `./run.sh init frontend`

## Command run app

-Run backend: `./run.sh backend`
-Run frontend: `./run.sh frontend`

## API Routes availables

- `/api/` - postman documentation
- `/api/books` - get all books
- `/api/books/1` - get one book by id
- `/api/books/1/pages` - all pages from a book
- `/api/books/1/pages/html` - all pages from a book in a specific content type
- `/api/books/1/pages/1` - get one page by book
- `/api/books/1/pages/1/html` - get one page by book in a specific content type

# manually run backend

1: pip install -r backend/requirements.txt
2: python -m backend.generates  
3: python -m backend.seed
4: python -m backend.main

# manually run frontend

1: cd ./frontent
2: move .env.example to .env
3: yarn install
4: yarn dev

# to run migrations

python -m backend.migrations.001-initial
