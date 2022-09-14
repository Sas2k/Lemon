"""
create-lemon-app
"""
from os import mkdir, chdir
import argparse

parser = argparse.ArgumentParser(description='Create a Lemon app.')

parser.add_argument('app_name', metavar='app_name', type=str)
parser.add_argument('--version', action='version', version='V.1.0.0')

args = parser.parse_args()

app_code = """from Lemon.components import Component
from Lemon.Server.server import Server
from Lemon.ui.buttons import Button
from random import choice

Root = Component(\"Lemon\", \"public/css/style.css\", \"public/js/script.js\")
app = Server()

class App(Component):
    name = \"App\"

    def item(props: dict):
        lemons = ['Lemonade', '🍋', 'Lemon', 'Sour']
        return f'''
        <div class=\"container text-center\">
            <h1 id="BIG">🍋</h1>
            <h1>Hello! edit this in app.py</h1>
            <h2>Here is a random lemon:<strong>{choice(lemons)}</strong></h2>
            <primary_button text=\"Click Me\" onclick='pop_up(\"Hello Everybody!\")'/>
        </div>
        '''

Root.add(
    [
    App,
    Button().components
    ]
)

@app.route("/")
def home(request, response):
    response.text = Root.render('<App/>')

app.run()
"""

css_code = """* {
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

readme_code = """# create-lemon-app: <name-of-app>

## Run it. 🚀

run the app by doing this command.

`python app.py`
"""

def main(args):
    """Main Function: Create-Lemon-App"""
    app_name = args.app_name
    try:
        mkdir(app_name)
    except Exception:
        pass
    chdir(app_name)
    
    #creates app file then write to it
    app = open("app.py", "w+", encoding="utf-8")
    app.write(app_code)
    app.close()

    try:
        mkdir("public")
        mkdir("public/css")
        mkdir("public/js")
    except Exception:
        pass

    style = open("public/css/style.css", "w+", encoding="utf-8")
    style.write(css_code)
    style.close()

    script = open("public/js/script.js", "w+", encoding="utf-8")
    script.write(js_code)
    script.close()

    readme = open("README.md", "w+", encoding="utf-8")
    readme.write(readme_code)
    readme.close()

    print(f"App created @ /{args.app_name}/")

if __name__ == "__main__":
    main(args)