---
title: Version 1.3.0 Release 🧪
authors: Sas2k
---

# Version 1.3.0 🧪

## Changes

- Added Test Fixtures for server.

```python
import pytest

def client_can_send_requests(server, client):
    RESPONSE_TEXT = "THIS IS COOL"
    @server.route("/test")
    def test(request, response):
        response.text = RESPONSE_TEXT

    assert client.get("http://testserver/hey").text == RESPONSE_TEXT
```

- Added Exception Handler (the text you get when a server gets an error)

```python
class ExceptionComponent(Component):
    name = "ExceptionComponent"

    def item(props: dict):
        return """
        <style>
            body {
                background-color: #000;
                color: #fff;
            }
            h1 {
                font-size: 3rem;
                font-weight: 300;
                color: #0af0fa;
            }
            h2 {
                font-size: 2rem;
                font-weight: 300;
            }
            p {
                font-size: 1.5rem;
                font-weight: 300;
            }
        </style>
        <div class='container'>
            <h1>001010100101101010010100101</h1>
            <h2>Looks like something went wrong</h2>
            <p>Please try again later......</p>
        </div>
        """

def custom_exception_handler(request, response, exception_cls):
    response.text = root.render("<ExceptionComponent/>")

app.add_exception_handler(custom_exception_handler)
```

- Django Like Routing (since of this, blueprinting is now achievable: check `examples/Lemon-App`)

```python
from Lemon.Server import server

app = server.Server(None)

def index(request, response):
    response.text = "Hello, world!"

app.add_route("/", index)

app.run()
```

- Updated `create-react-app`.

**Full Changelog**: https://github.com/Sas2k/Lemon/compare/V.1.2.6...V.1.3.0

_**Until Next Time Good Day people!**_