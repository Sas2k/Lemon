from Lemon.components import Component
from Lemon.server import Server

class Index(Component):

    name = "Index"
    components = {}

    def __init__(self, name):
        self.name = name

    def item(props: dict):
        return f"""
            <h1>YOLO</h1>
            <br>
            <h2>You only live once {props["name"]}</h2>
        """

app = Server()
Root = Component("YOLO")

Root.add(Index)

@app.route("/{name}")
def name(request, response, name):
    index = Root.render(f"<Index name={name}/>")
    response.text = index

app.run()