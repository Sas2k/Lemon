from Lemon.components import Component
from Lemon.ui.buttons import Buttons

Root = Component("Lemon", "public/css/style.css", "public/js/script.js")


class route(Component):
    name = "route"

    def item(props: dict):
        return f"""
        <div class="container text-center">
            <h1 id="BIG">🍋</h1>
            <h1>Hello! edit this in routes/route.py</h1>
            <h2>Isn't the Lemon very <strong>BIG</strong></h2>
            <primary_button text="Click Me" onclick="console.log('%cHello People!', 'color: blue; font-family: monospace; font-size: 20px;'"/>
        </div>
        """


Root.add([route])


def route(request, response):
    response.text = Root.render("<route/>")
