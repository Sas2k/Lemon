from Lemon.components import Component
from Lemon.Server.server import Server
from Lemon.ui.forms import FormControl

app = Server()
Root = Component("Test", None, "public/script.js")


class Test(Component):

    name = "Test"

    def item(props: dict):
        return """
        <div class="container">
            <h1>Type in the text box!</h1>
            <form>
                <Input type="text" name="text" id="text" oninput="changetext()" placeholder="Type here!">
            </form>
            <p>Text: <span id="text-output"></span></p>
        </div>
        """


Root.add([Test, FormControl().components])


@app.route("/")
def index(request, response):
    response.text = Root.render("<Test/>")


app.run()
