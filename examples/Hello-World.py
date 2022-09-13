from Lemon.components import Component
from Lemon.Server.server import Server

app = Server(None)
Root = Component("Home")

class home(Component):
    
    name = "home"

    def item(props: dict):
        return """
            <h1>Hello World!</h1>
            <p>This is generated in Python!</p>
            <p><strong>This is in BOLD</strong></p>
            <p><em>This is in ITALICS</em></p>
            <a href=\"https://github.com/Sas2k\">My Github Profile</a>
        """

Root.add(home)

@app.route("/")
def student(request, response):
    home_page = Root.render("<home/>")
    response.text = home_page

app.run()