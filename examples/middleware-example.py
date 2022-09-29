from Lemon.components import Component
from Lemon.Server import server, middleware

app = server.Server(None)

class middleware_example(middleware):
    def process_request(self, req):
        print("Despatching ->", req.url)

    def process_response(self, req, res):
        print("Despatched", req.url)


app.add_middleware(middleware_example)