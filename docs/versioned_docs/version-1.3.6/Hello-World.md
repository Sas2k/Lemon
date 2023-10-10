---
title: Hello World!
sidebar_position: 3
---

# Lemon 🍋: Hello-World!

Hello, in this part. we're going to build a small lemon app.

## Getting Started

first of, let's create a virtual environment.

```bash
#with venv
python -m venv venv

#with virtualenv
python -m virtualenv venv
```

then activate it with the below command.

```bash
#windows
.\\venv\\Scripts\\activate
```

after that install Lemon in it.

```bash
pip install Lemon-Library
```

## creating the app

now in that app create a file called `app.py`

now in that app paste this code (don't worry I will explain the code).

```python
from Lemon.components import Component
from Lemon.Server.server import Server

app = Server(None)
Root = Component("Home")

class home(Component):
    
    name = "home"

    def item(props: dict):
        return """
            <h1>Hello World!</h1>
            <p>This is generated in Python!</p>
            <p><strong>This is in BOLD</strong></p>
            <p><em>This is in ITALICS</em></p>
            <a href=\"https://github.com/Sas2k\">My Github Profile</a>
        """

Root.add(home)

@app.route("/")
def student(request, response):
    home_page = Root.render("<home/>")
    response.text = home_page

app.run()
```

now to run it, just do this.

`python app.py`

## Code Break Down 🥚🍳

Now let's break the code down.

in the first 2 lines, it imports the server and the Component Class. (which is the base class to create the components.)

then we define an `app` variable, which is the server instance.
the `root` variable is the root component where the components are rendered.

then there is the `Home` Class, which is a component.

in the component class, there is a `name` variable, which is the variable that says the name of the variable.

then the `item` function is where the components stuff is there (like the filling of a pie 🥧).

the `item` function has a `props` dictionary object. Which are the properties of the element.

For example: `<exampleComponent name="Sas2k"/>

here the `name="Sas2k"` is the prop.

After that the component is added to the Root with the `Root.add`.

then their is the usual route function.

After, their is the `app.run` which runs it.

And that's basically it.

_A Lemon app, broken down._
