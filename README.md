<p align="center">
  <a href="" rel="noopener">
 <img src="https://raw.githubusercontent.com/Sas2k/Lemon/main/Lemon-Banner.png" alt="Lemon Logo"></a>
</p>
<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/Sas2k/Lemon.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/Sas2k/Lemon.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)
[![Downloads](https://static.pepy.tech/personalized-badge/lemon-library?period=total&units=international_system&left_color=yellow&right_color=orange&left_text=PyPI%20Downloads)](https://pepy.tech/project/lemon-library)

</div>

---

<p align="center"> An Experimental Full-Stack Framework For Python. (Still in Development)
    <br> 
</p>

## 📝 Table of Contents

- [📝 Table of Contents](#-table-of-contents)
- [🧐 About <a name = "about"></a>](#-about-)
- [🗒 To-Do <a name = "To-Do"></a>](#-to-do-)
- [🏁 Getting Started <a name = "getting_started"></a>](#-getting-started-)
  - [Folder Structure for apps](#folder-structure-for-apps)
  - [Installing](#installing)
- [⛏️ Built Using <a name = "built_using"></a>](#️-built-using-)
- [✍️ Authors <a name = "authors"></a>](#️-authors-)

## 🧐 About <a name = "about"></a>

A full-stack framework built with python. The library is shipped with Bootstrap 5 for your styling needs.

Discord Server: https://discord.gg/wg239Cpf

Features:
- UI Library (Development)
- A full Back-end Capabilities [routing, post and get, class based route-handling, cookies and etc...]
- An ORM and migrations feature (check-out -> examples/Lemon-App)
- React like syntax
- middleware api
- a terminal app to create app [create-lemon-app < app-name >]
- Reactivity (See `examples/reactivity-example`)

> If you want to have live reloading try uvicorn: https://www.uvicorn.org/

> If you don't think this isn't capable to handle anything check this out! -> https://portfolio-sas2k.vercel.app/ | https://github.com/Sas2k/portfolio

## 🗒 To-Do <a name = "To-Do"></a>

> Legend: <br>
> [x] - checked
> [\*] - doing
> [ ] - Not Done

- [ ] Form Data Handling
- [ ] complex front-end stuff
- [x] Models (Databases)
- [x] API
- [ ] Docs
- [ ] Get to V1.0.0

## 🏁 Getting Started <a name = "getting_started"></a>

Docs Are still in Development Try heading over to `/examples` for some idea.
Here is an example below

```python
from Lemon import Component
from Lemon.server import Server

app = Server(static_dir=None) #set the static_dir to none if there is no .css or .js files =The Default Folder for static is public=
Root = Component("Home Page", None, None) #Root component: The component where your other components are rendered: The name inside is the name displayed on the tab, the 2 nones are for css and js file locations

class Home(Component):
    "Home Page Component"
    name = "Home" # Name of the component : REQUIRED
    
    def item(props: dict): #item function where the renderer calls to get your html and other code
        return """
            <h1>Hello World!</h1>
        """

Root.add([Home]) #Add the Home component to the Root component

@app.route("/") #Route decorator
def index(request, response):
    home_page = Root.render("<Home/>") #Note: always use components in Root.render never HTML
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

## ✍️ Authors <a name = "authors"></a>

- [@Sas2k](https://github.com/Sas2k) - Idea & Initial work

See also the list of [contributors](https://github.com/Sas2k/Lemon/contributors) who participated in this project.
