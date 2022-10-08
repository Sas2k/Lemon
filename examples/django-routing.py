from Lemon.Server import server

app = server.Server(None)

def index(request, response):
    response.text = "Hello, world!"

app.add_route("/", index)

app.run()