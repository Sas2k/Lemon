from Lemon.component import Component
from Lemon.server import Server

app = Server()

class home(Component):
    def __init__(self):
        self.name = "home"

    def item(self):
        return {
            "title": "Home",
            "h1": "Hello World!",
            "p": "This is generated in Python!",
            "p": "*This is in BOLD*",
            "p": "_This is in ITALICS_",
            "a": "https://github.com/Sas2k|My Github Profile"
        }

@app.route("/")
def student(request, response):
    home_page = home().render()
    response.text = home_page

app.run()