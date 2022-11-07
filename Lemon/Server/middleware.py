"""
Lemon.Server: Middleware
By Sasen Perera 2022
"""
from webob import Request, Response


class Middleware:
    """Middleware Class"""

    def __init__(self, app):
        """Middleware Init"""
        self.app = app

    def add(self, middleware_cls):
        """Add Middleware"""
        self.app = middleware_cls(self.app)

    def process_request(self, req):
        """Process Request"""
        pass

    def process_response(self, req, resp):
        """Process Response"""
        pass

    def handle_request(self, request):
        """Handle Request"""
        self.process_request(request)
        response = self.app.handle_request(request)
        self.process_response(request, response)

        return response

    def __call__(self, environ, start_response):
        """The code to run when the class is called as a function"""
        request = Request(environ)
        response = self.app.handle_request(request)
        return response(environ, start_response)
