---
title: Lemon.Server.server
sidebar_position: 3
---

# Lemon.Server.server

The server, the main backend. (which contains routes and etc..)

## Server [Class] | (self, static_dir="public")

The Server Methods

```python
from Lemon.Server import server

app = server.Server(None) #place None here if you don't have any static files.
```

### Attributes, Properties and Functions

- #### wsgi_app [Function] | (self, environ, start_response) | < Developer-Function >

returns a response with environ.

- #### add_route [Function] | (self, path, handler)

This function adds route django style!.

```python
def index(request, response):
    response.text = "Hello World!"

app.add_route("/", index)
```

- #### add_exception_handler [Function] | (self, exception_handler)

Adds a sever exception handler.

```python
def custom_exception_handler(request, response, exception_cls):
    response.text = "Oops!, Something went wrong!"

app.add_exception_handler(custom_exception_handler)
```

- #### route [Decorator(Function)] | (self, path)

the route decorator.

```python
#Function Based Handler
@app.route("/")
def index(request, response):
    request.text = "Hello World"

#Class Based Handler
@app.route("/")
class Index():
    def get(self, req, res):
        res.text = "Hello World"

    def post(self, req, res):
        res.text = req.json
```

- #### handle_request [Function] | (self, request) | < Developer-Function >

Handles incoming requests.

- #### add_cookie [Function] | (self, response, key, value, max_age=None, expires=None, path="/", domain=None, Secure=False, httponly=False, samesite=None)

Creates a cookie 🍪

```python
@app.route("/")
def index(request, response):
    add_cookie(response, "Hello", "world")
```

- #### delete_cookie [Function] | (self, response, key, path="/", domain=None)

Deletes a cookie 🍪🤏🏽

```python
@app.route("/")
def index(request, response):
    delete_cookie(response, "Hello")
```

- #### get_cookie [Function] | (self, request, key)

Gets a cookie 📦

```python
@app.route("/")
def index(request, response):
    get_cookie(request, "Hello")
```

- #### add_middleware [Function] | (self, middleware_cls)

Adds a middleware to run.

```python
app.add_middleware(PrintMiddleWare) # <- Fake name "PrintMiddleWare"
```

- #### test_session [Function] | (self, base_url="http://testserver") < Developer-Function >

The testing session used in tests.

- #### run [Function] | (self, host="127.0.0.1", post=8000)

Runs the app.

```python
app.run(port=5000)
```
