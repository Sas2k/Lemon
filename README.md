<p align="center">
  <a href="" rel="noopener">
 <img src="https://raw.githubusercontent.com/Sas2k/Lemon/main/Lemon-Banner.png" alt="Lemon Logo"></a>
</p>
<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/Sas2k/Lemon.svg)](https://github.com/Sas2k/Lemon/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/Sas2k/Lemon.svg)](https://github.com/Sas2k/Lemon/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)
[![Downloads](https://static.pepy.tech/personalized-badge/lemon-library?period=total&units=international_system&left_color=yellow&right_color=orange&left_text=Downloads)](https://pepy.tech/project/lemon-library)

</div>

---

<p align="center"> An Experimental Full-Stack Framework For Python.
    <br> 
</p>

## 📝 Table of Contents

- [📝 Table of Contents](#-table-of-contents)
- [🧐 About ](#-about-)
- [🗒 To-Do ](#-to-do-)
- [🏁 Getting Started ](#-getting-started-)
  - [Folder Structure for apps](#folder-structure-for-apps)
  - [Installing](#installing)
- [⛏️ Built Using ](#️-built-using-)
- [✍️ Authors ](#️-authors-)

## 🧐 About <a name = "about"></a>

A full-stack framework built with python. The library is shipped with Bootstrap 5 for your styling needs.

Docs: https://sas2k.github.io/Lemon

Discord Server: https://discord.gg/Dw6hCp3usF

Features:
- UI Library (Development)
- A full Back-end Capabilities
- Django style route adding (See `examples/django-routing.py`)
- An ORM and migrations feature (check-out -> examples/Lemon-App) (ORM supports strings only for now.)
- React like syntax
- middleware api
- a terminal app to create app [create-lemon-app < app-name >]
- Component Generator [https://github.com/Sas2k/Lemon-CLI]
- Reactivity (See `examples/reactivity-example`)
- Testing (See `examples/Tests.py`)
- Custom Exception Handler (`examples/exception-handler.py`)
- Blueprint Routing (`examples/Lemon-App`)


> If you want to have live reloading try uvicorn: https://www.uvicorn.org/

> If you don't think this isn't capable to handle anything check these out! <br>
> https://sas2ks-old-portfolio.vercel.app/ | https://github.com/Sas2k/Old-Portfolio <br>
> https://github.com/Sas2k/HTTP-Blog

## 🗒 To-Do <a name = "To-Do"></a>

> Legend: <br>
> [x] - checked
> [\*] - doing
> [ ] - Not Done

- [ ] Form Data Handling (Currently being Developed)
- [ ] States (Currently being Developed)

## 🏁 Getting Started <a name = "getting_started"></a>

Docs Are still in Development Try heading over to `/examples` for some idea.
Here is an example below

```python
from Lemon.components import Component
from Lemon.Server.server import Server

app = Server(static_dir=None) 
Root = Component("Home Page", None, None) #Root component

class Home(Component):
    "Home Page Component"
    name = "Home"
    
    def item(props: dict): 
        "The Item Function: where the html and props are passed"
        return """
            <h1>Hello World!</h1>
        """

Root.add([Home])

@app.route("/") #Route decorator
def index(request, response):
    home_page = Root.render("<Home/>")
    response.text = home_page

app.run() #runs the app
```

### Folder Structure for apps

Here is the folder structure I recommend.
(you can create your own structure based on your needs)
```
App/
    - src/
        - Components/
            - __init__.py
            - components.py
        - Models/
            - __init__.py
            - models.py
        - Routes/
            - __init__.py
            - routes.py
        - Public/
            - css/
                - style.css
            - js/
                - script.js
        - app.py
        - base.py
    - README.md
```

### Installing

To install with,

pip: `pip install Lemon-Library`

## ⛏️ Built Using <a name = "built_using"></a>

- [Python](https://python.org)
- [Waitress](https://pypi.org/project/waitress/)
- [WebOb](https://pypi.org/project/WebOb/)
- [Parse](https://pypi.org/project/parse)
- [whitenoise](https://pypi.org/project/whitenoise/)
- [requests](https://pypi.org/project/requests/)
- [pytest](https://pypi.org/project/pytest/)
- [requests (wsgi-adapter)](https://pypi.org/project/requests-wsgi-adapter/)
- [black](https://pypi.org/project/black/)

## ✍️ Authors <a name = "authors"></a>

<a href="https://github.com/Sas2k/Lemon/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Sas2k/Lemon" />
</a>

See also the list of [contributors](https://github.com/Sas2k/Lemon/contributors) who participated in this project.
