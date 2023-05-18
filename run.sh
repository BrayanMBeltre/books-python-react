#!/bin/bash

if [[ "$1" == "init" ]]; then
    if [[ "$2" == "backend" ]]; then
        echo "Initializing backend..."
        pip install -r backend/requirements.txt
        python -m backend.generates
        python -m backend.seed
        python -m backend.main
    elif [[ "$2" == "frontend" ]]; then
        echo "Initializing frontend..."
        cd frontend
        cp .env.example .env
        yarn install
        yarn dev
    else
        echo "Invalid argument: $2"
    fi
elif [[ "$1" == "frontend" ]]; then
    echo "Running frontend..."
    cd frontend
    yarn dev
elif [[ "$1" == "backend" ]]; then
    echo "Running backend..."
    python -m backend.main
else
    echo "Invalid argument: $2"
fi
else
echo "Invalid command: $1"
