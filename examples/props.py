from Lemon.components import Component
from Lemon.Server.server import Server

Root = Component("Props")
app = Server(static_dir=None)

class test(Component):

    name = "test"

    def item(props: dict):
        return "<a href='/'><button>Click Me</button></a>"

class Props(Component):

    name = "Props"
    components = {}

    def __init__(self):
        pass

    def item(props: dict):
        return f"""
            <h1>{props['title']}</h1>
            <h2>{props['h1']}</h2>
            <p>{props['p']}</h3>
        """

Root.add([test, Props])

@app.route("/")
def title(request, response):
    page = Root.render("""<Props title='Lemon' h1='Hello World!' p='This is generated in Python!'/><test/>""")
    response.text = page

app.run()