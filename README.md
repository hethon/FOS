# Project Overview

This project consists of two main parts: `api` and `frontend`.

## API
The `api` is built with Flask and follows an MVC structure. Below is the directory layout:

### Directory Structure
- **Models**: Represent the database schemas and handle database-related logic. Located in the `app/models/` directory.
- **Views**: Define routes and handle HTTP requests and responses. Templates in the `templates/` directory are used for rendering HTML. Located in the `app/views/` directory.
- **Controllers**: Contain business logic and manage interactions between models and views. Located in the `app/controllers/` directory.
- **Static Files**: Includes assets like CSS, JavaScript, and images. These are located in the `static/` directory.
- **App Factory**: The `__init__.py` file in the `app/` directory initializes the Flask application and its extensions (e.g., SQLAlchemy).

## Frontend
The `frontend` is built with React and dynamically communicates with the `api` to fetch and display data.

# How to Run This Project

Follow these steps to set up and run the project locally:

## 1. Set Up the API
1. Navigate to the `api` directory and create a virtual environment:

   ```bash
   $ cd api
   $ python3 -m venv venv
   $ source venv/bin/activate
   (venv)$ pip install -r requirements.txt
   ```

2. Ensure all dependencies are installed and the Flask app is configured correctly.

## 2. Set Up the Frontend
1. Navigate to the `frontend` directory and install the dependencies:

   ```bash
   $ cd frontend
   $ npm install
   ```

## 3. Run the API Server
From the `frontend` directory, start the API server:

```bash
$ npm start-api
```

## 4. Run the Frontend Server
While still in the `frontend` directory, start the frontend development server:

```bash
$ npm start
```

## 5. Access the Application
Open your browser and visit `http://localhost:3000` to see the application in action.

# Notes
- Both the `api` and `frontend` support hot reloading. Changes made to either part will automatically apply without requiring a server restart.
- Ensure you have the required versions of Python, Node.js, and npm installed to avoid compatibility issues.
