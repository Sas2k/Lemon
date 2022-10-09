# Part 1: Setting things up.

Now, let's set thing up.

firstly, let's  run the usual `create-lemon-app` command to generate the boilerplate code.

```cmd
create-lemon-app http-blog
```

```
App created @ /http-blog/
```

then move into it with `cd`

```bash
cd http-blog
```

then the directory should look like this.

```dir
http-blog/
    - models/
        - model.py
    -public/
        - css/
            - style.css
        - js/
            - script.js
    - app.py
    - base.py
    - README.md
```

now create a virtual environment 

```cmd
#with venv
python -m venv venv

#with virtualenv
pip install virtualenv #if you haven't already installed it before
python -m virtualenv venv
```

After this install `Lemon`
```
pip install Lemon-Library
```

then run the `app.py` to see if everything is correct.

`python app.py`

if the app is running then visit localhost:8000, to see the app running.

then press `control + c` to stop.

now go ahead and delete the `script.js` and `style.css` which is inside the public. (since we don't need it yet.)

Now go into the app.py

and replace the file with this.

```python
from Lemon.components import Component
from Lemon.Server.server import Server

Root = Component("Lemon")
app = Server(static_dir="public")

class App(Component):
    name = "App"
    def item(props: dict):
        return "Hello World"

Root.add(
    [
        App
    ]
)

@app.route("/")
def home(request, response):
    response.text = Root.render('<App/>')

app.run()

```

Here, we have removed everything unnecessary from the app.
(We kept the app component since, it will be the main component.)

now if you run it.

you will just see a Hello World text on the browser.

Now the files are prepped and ready to write the code.

Go to Part II.