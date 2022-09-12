<p align="center">
  <a href="" rel="noopener">
 <img width=240px height=240px src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/lemon_1f34b.png" alt="Lemon Logo"></a>
</p>

<h1 align="center">Lemon &#127819;</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/Sas2k/Lemon.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/Sas2k/Lemon.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)
![Pypi Monthly Downloads](https://img.shields.io/pypi/dm/Lemon-Library.svg)

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
  - [Installing](#installing)
- [⛏️ Built Using <a name = "built_using"></a>](#️-built-using-)
- [✍️ Authors <a name = "authors"></a>](#️-authors-)

## 🧐 About <a name = "about"></a>

A framework that can generate html with python code and have capabilities of a Web Server. The library is shipped with Bootstrap 5 for your styling needs.

## 🗒 To-Do <a name = "To-Do"></a>

- [ ] Add styling options
- [ ] Models (Databases)
- [ ] API
- [ ] Docs
- [ ] Get to V1.0.0

## 🏁 Getting Started <a name = "getting_started"></a>

Docs Are still in Development Try heading over to `/examples` for some idea.
Here is an example below

```python
from Lemon.components import Component
from Lemon.server import Server

app = Server()
Root = Component("Home Page") #Root component: The component where your other components are rendered: The name inside is the name displayed on the tab

class Home(Component):
    "Home Page Component"
    name = "Home" # Name of the component : REQUIRED
    components = {} # components dictionary : REQUIRED
    
    def item(props: dict): #item function where the renderer calls to get your html and other code
        return """
            <h1>Hello World!</h1>
        """

Root.add(Home) #Add the Home component to the Root component

@app.route("/") #Route decorator
def index(request, response):
    home_page = Root.render("<Home/>")
    response.text = home_page

app.run() #runs the app
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
