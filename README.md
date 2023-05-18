# Coco Library

REST API and an application that will allow users to read the list of available books, as well as to read those books' page by page in the desired formats.

On this first iteration, the books will be available (page by page) in plain text and HTML. In future iterations, I would like to add support for more reading formats, as well as support to interface with other online book service providers.

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
