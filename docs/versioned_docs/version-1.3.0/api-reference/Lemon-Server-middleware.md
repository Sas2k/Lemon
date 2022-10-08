---
title: Lemon.Server.middleware
sidebar_position: 4
---

# Lemon.Server.middleware

The middleware module

```python
1 | from Lemon.components import Component
2 | from Lemon.Server import server, middleware
3 | 
4 | app = server.Server(None)
5 |
6 | class middleware_example(middleware):
7 |     def process_request(self, req):
8 |         print("Despatching ->", req.url)
9 | 
10|     def process_response(self, req, res):
11|         print("Despatched", req.url)
12|
13|app.add_middleware(middleware_example)
```

## Middleware [Class] | (self, app)

The middleware base class

### Attributes, Properties and Functions

- #### add [Function] | (self, middleware_cls) < Developer-Function >

Adds a middleware.

- #### process_request [Function] | (self, req) 

Process's the middleware's requests

> line 6~8 on example

- #### process_response [Function] | (self, req)

Process's the middleware before sending back the response

> line 10~11 on example

- #### handle_request [Function] | (self, req, res) < Developer-Function >

Handles Request that the class receives.
