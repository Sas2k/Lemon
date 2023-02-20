"""
create-lemon-app
"""
from os import mkdir, chdir
import argparse

parser = argparse.ArgumentParser(description="Create a Lemon app.")

parser.add_argument("app_name", metavar="app_name", type=str)
parser.add_argument("--version", action="version", version="V.1.0.0")

app_code = """from Lemon.components import Component
from Lemon.Server.server import Server
from Lemon.ui.buttons import Buttons

from random import choice

from models.model import insert_fake_data

from routes.route import route

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
    insert_fake_data()
    response.text = Root.render('<App/>')

app.add_route("/route", route)

app.run()

"""

css_code = """*, body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: yellow;
    text-align: center;
}

#BIG{
    font-size: 6rem;
}

h1 {
    text-align: center;
    font-weight: bold;
}

h2 {
    text-align: center;
    font-style: italic;
}"""

js_code = """let Today = new Date();
var time = Today.getFullYear() + '-' + Today.getMonth() + '-' + Today.getDate() + ' | ' + Today.getHours() + ':' + Today.getMinutes() + ':' + Today.getSeconds()
var pop_up = (string) => {
    console.log(string)
    alert(time + ':\\n' + string)
}
"""

readme_code = """# create-lemon-app: *

## Run it. 🚀

run the app by doing this command.

`python app.py`

## Migrate SQL

With this

`python base.py`
"""

sql_base = """from Lemon.orm import DBManager, migrations

baseModel = DBManager.baseModel
ClassBase = DBManager.base
migrate = migrations.MigrateCommand

class model(baseModel):
    base_model = ClassBase
    tablename = "model"
    fields = ("field1", "field2")

model_list = [model]

migrate(model_list).migrate()"""

sql_model = """from Lemon.orm.DBManager import SqliteManager

sql = SqliteManager("model.db")
# inserts some fake data to field1 and field2
def insert_fake_data():
    sql.insert("model", ("field1", "field2"), ("Hello", "World"))
    print(sql.select("model", ("field1", "field2")))
    print("From model.py")
    sql.delete("model", ("field1='Hello'", "field2='World'"))
"""

route = """from Lemon.components import Component
from Lemon.ui.buttons import Buttons

Root = Component("Lemon", "public/css/style.css", "public/js/script.js")

class route(Component):
    name = "route"

    def item(props: dict):
        return f'''
        <div class="container text-center">
            <h1 id="BIG">🍋</h1>
            <h1>Hello! edit this in routes/route.py</h1>
            <h2>Isn't the Lemon very <strong>BIG</strong></h2>
            <primary_button text="Click Me" onclick="console.log('%cHello People!', 'color: blue; font-family: monospace; font-size: 20px;'"/>
        </div>
        '''

Root.add(
    [
        route
    ]
)

def route(request, response):
    response.text = Root.render("<route/>")
"""

test_app = """import pytest

def test_of_test(server, client):
    RESPONSE_TEXT = "THIS IS COOL"
    @api.route("/test")
    def test():
        return RESPONSE_TEXT
    assert client.get("http://testserver/test").text == RESPONSE_TEXT
"""


def main():
    """Main Function: Create-Lemon-App"""
    args = parser.parse_args()

    app_name = args.app_name
    try:
        mkdir(app_name)
    except Exception:
        pass
    chdir(app_name)

    # creates app file then write to it
    open("app.py", "w+", encoding="utf-8").write(app_code)
    open("base.py", "w+", encoding="utf-8").write(sql_base)

    try:
        mkdir("public")
        mkdir("public/css")
        mkdir("public/js")
        mkdir("models")
        mkdir("Tests")
        mkdir("routes")
    except Exception as e:
        pass

    open("public/css/style.css", "w+", encoding="utf-8").write(css_code)

    open("public/js/script.js", "w+", encoding="utf-8").write(js_code)

    open("models/model.py", "w+", encoding="utf-8").write(sql_model)

    open("models/__init__.py", "w+", encoding="utf-8").write("")

    open("routes/route.py", "w+", encoding="utf-8").write(route)

    open("routes/__init__.py", "w+", encoding="utf-8").write("")

    open("Tests/__init__.py", "w+", encoding="utf-8").write("")

    open("Tests/test.py", "w+", encoding="utf-8").write(test_app)

    open("requirements.txt", "w+", encoding="utf-8").write("Lemon-Library\npytest")

    open("README.md", "w+", encoding="utf-8").write(readme_code.replace("*", app_name))

    print(f"App created @ /{args.app_name}/")


if __name__ == "__main__":
    main()
