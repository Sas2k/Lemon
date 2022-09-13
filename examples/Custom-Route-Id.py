from Lemon.components import Component
from Lemon.Server.server import Server
from Lemon.ui.buttons import Buttons

class Index(Component):

    name = "Index"

    def __init__(self, name):
        self.name = name

    def item(props: dict):
        return f"""
            <h1>YOLO</h1>
            <br>
            <h2>You only live once {props["name"]}</h2>
        """

class home_redirect(Component):
    
        name = "home_redirect"
    
        def item(props: dict):
            return f"""
                <h1>Go to /your-name-here</h1>
                <primary_button text="Click Me" size="sm" onclick="alert('YOU CLICKED ME! why?')"/>
            """

app = Server(static_dir=None)
Root = Component("YOLO")

Root.add(
    [
    Index,
    home_redirect,
    Buttons().components
    ]
)

@app.route("/")
def name(request, response):
    response.text = Root.render("<home_redirect/>")

@app.route("/{name}")
def name(request, response, name):
    index = Root.render(f"<Index name={name}/>")
    response.text = index

app.run()