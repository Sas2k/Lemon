from Lemon.component import Component
from Lemon.server import Server

class Index(Component):
    def __init__(self, name):
        self.name = name

    def item(self):
        return {
            "title": "YOLO",
            "h1": "YOLO",
            "br": "",
            "h2": f"You only live once {self.name}"
        }

app = Server()

@app.route("/{name}")
def name(request, response, name):
    index = Index(name).render()
    response.text = index

app.run()