from Lemon.components import Component
from Lemon.Server.server import Server
from Lemon.ui.buttons import Buttons
from Lemon.ui.forms import FormControl

Root = Component("UI-Demo")
app = Server(static_dir=None)


class Button(Component):
    name = "Button"

    def item(props: dict):
        return f"""
        <div class=\"container\">
            <h2>Buttons</h2>
            <br>
            <primary_button text=\"Primary Button\" onclick=\"alert('Primary')\"/>
            <br>
            <secondary_button text=\"Secondary Button\" onclick=\"alert('Secondary')\"/>
            <br>
            <success_button text=\"Success Button\" onclick=\"alert('Success')\"/>
            <br>
            <danger_button text=\"Danger Button\" onclick=\"alert('Danger')\"/>
            <br>
            <warning_button text=\"Warning Button\" onclick=\"alert('Warning')\"/>
            <br>
            <info_button text=\"Info Button\" onclick=\"alert('Info')\"/>
            <br>
            <light_button text=\"Light Button\" onclick=\"alert('Light')\"/>
            <br>
            <dark_button text=\"Dark Button\" onclick=\"alert('Dark')\"/>
            <br>
            <link_button text=\"Link Button\" onclick=\"alert('Link')\"/>
        </div>
        """


class Forms(Component):
    name = "Forms"

    def item(props: dict):
        return f"""
        <div class=\"container\">
            <h2>Forms</h2>
            <form action=\"/form-output\" >
                <Input type=\"textarea\" cols=\"32\" rows=\"32\" id=\"input\" text=\"Input\"/>
                <Select id=\"select\" text=\"Select\" options=\"Hello,World\"/>
                <Checkbox id=\"checkbox\" text=\"Hello Select the checkbox\"/>
                <Submit id=\"Submit\" text=\"Submit\"/>
            </form>
        </div>
        """


class index(Component):
    name = "index"

    def item(props: dict):
        return f"""
        <h1>Lemon UI Demo</h1>
        <Button/>
        <Forms/>
        """


Root.add(
    [
        index,
        Button,
        Forms,
        Buttons().components,
        FormControl().components,
    ]
)


@app.route("/")
class index:
    def get(self, request, response):
        html = Root.render("<index/>")
        response.text = html


app.run()
