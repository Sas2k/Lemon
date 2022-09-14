from Lemon.components import Component
from Lemon.Server.server import Server
from Lemon.ui.buttons import Buttons
from random import choice

Root = Component("Lemon", "public/css/style.css", "public/js/script.js")
app = Server(static_dir="public")

class App(Component):
    name = "App"

    def item(props: dict):
        lemons = ['Lemonade', '🍋', 'Lemon', 'Sour']
        return f'''
        <div class="container text-center">
            <h1 id="BIG">🍋</h1>
            <h1>Hello! edit this in app.py</h1>
            <h2>Here is a random lemon:<strong>{choice(lemons)}</strong></h2>
            <primary_button text="Click Me" onclick="pop_up('Hello Everybody!')"/>
        </div>
        '''

Root.add(
    [
    App,
    Buttons().components
    ]
)

@app.route("/")
def home(request, response):
    response.text = Root.render('<App/>')

app.run()
