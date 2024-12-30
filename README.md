**This project follows the MVC design pattern**

- __Models__: Represent the database schemas and handle database-related logic. Located in the `app/models/` directory.

- __Views__: Contain route definitions and handle HTTP requests and responses. Located in the `app/views/` directory. Templates in templates/ are used for rendering HTML.

- __Controllers__: Contain the business logic and handle interactions between models and views. Located in the  `app/controllers/` directory.

- __Static Files__: Includes assets like CSS, JavaScript, and images.

- __App Factory__: The `__init__.py` in the `app/` folder initializes the Flask app and its extensions (e.g., SQLAlchemy,).
