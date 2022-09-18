"""
Lemon: Experimental Front-end for Python
Component: Base class for all components
By Sasen Perera 2022
"""
import re

class Component():
    __initialized = False

    def __init__(self, name, stylesheet = None, script = None):
        """Init Function"""
        try:
            self.name = name
            self.style = '<link rel="stylesheet" href="' + stylesheet + '">' if stylesheet != None else ""
            self.script = '<script src="' + script + '"></script>' if script != None else ""
            self.components = {}
        finally:
            self.__initialized = True

    def __setattr__(self, name, value):
        """Set Attribute"""
        if self.__initialized:
            raise AttributeError("Lemon.Component: cannot set attribute")
        else:
            super().__setattr__(name, value)

    def add(self, components: list or object):
        """Add Components in a list"""
        if type(components) == list:
            for index in range(0, len(components)):
                if type(components[index]) == object:
                    self.components[components[index].name] = components[index]
                elif type(components[index]) == list:
                    inner_list = components[index]
                    for index2 in range(0, len(inner_list)):
                        try:
                            self.components[components[index][index2].name] = components[index][index2]
                        except AttributeError:
                            raise TypeError(f"Lemon.Component: add() must be a list of components -> {components[index][index2]}")
                else:
                    try:
                        self.components[components[index].name] = components[index]
                    except AttributeError:
                        raise TypeError("Lemon.Component: add() must be a list of components")
        else:
            self.components[components.name] = components

    def parse(self, Root, prop: list):
        """Render Function"""
        component = self.item(props=prop)
        if type(component) != str:
            raise TypeError("Lemon.Component: item() must return a string")
            
        def parse_html(component, root):
            component = component.split("\n")
            body_code = ""
            for line in component:
                Stripline = line.removeprefix("\t").strip()
                lines = Stripline.replace("<", "").replace("\t", "").replace("/>", "")
                component_name = lines.split(" ", 1)[0]
                try:
                    component_props = lines.split(" ", 1)[1] if len(lines.split(" ")) > 1 else ""
                    if component_props != "":
                        component_props = re.split(r'\s(?=\w+=)', component_props)
                        props = {}
                        for index in range(len(component_props)):
                            prop = component_props[index].split("=")
                            value = prop[1].replace("'", "") if prop[1][0] == "'" else prop[1].replace('"', '')
                            props[prop[0]] = value
                    else:
                        props = {}
                except IndexError:
                    props = {}
                if component_name in list(Root.keys()):
                    component_render = Root[component_name]
                    body_code += component_render.parse(component_render, root, props)
                else:
                    body_code += Stripline

            output = body_code.replace("None", "", -1).replace("\n", "", -1)
            return output

        body_code = parse_html(component, Root)
        return f"""{body_code}"""

    def render(self, app: str):
        """Render App"""
        app = app.split("\n") if "\n" in app else app.split("/>")
        bootstrap5_css_cdn = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css">'
        bootstrap5_js_cdn = '<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/js/bootstrap.bundle.min.js"></script>'
        html = f"<!DOCTYPE html><html><head><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><title>{self.name}</title>{bootstrap5_css_cdn}{self.style}</head><body>"
        reactive_code = """let data = {
    message: ""
}
let target = null
class Dep {
  constructor() {
    this.subscribers = []
  }
  depend() {
    if (target && !this.subscribers.includes(target)) {
      this.subscribers.push(target);
    }
  }
  notify() {
    this.subscribers.forEach(sub => sub());
  }
}

Object.keys(data).forEach(key => {
  let internalValue = data[key]

  const dep = new Dep()

  Object.defineProperty(data, key, {
    get() {
      dep.depend()
      return internalValue
    },
    set(newVal) {
      internalValue = newVal
      dep.notify()
    }
  })
})

let renderFunction = () => {
  document.getElementById("message").innerHTML = data.message;
}

let watcher = function(func) {
  target = func
  target()
  target = null
}"""
        for component in app:
            if component != "":
                component = component.replace("<", "").replace("\t", "")
                component_name = component.split(" ", 1)[0]
                component_props = component.split(" ", 1)[1] if len(component.split(" ")) > 1 else ""
                if component_props != "":
                    component_props = re.split(r"\s(?=\w+=)", component_props)
                    props = {}
                    for index in range(len(component_props)):
                        prop = component_props[index].split("=")
                        value = prop[1].replace("'", "") if prop[1][0] == "'" else prop[1].replace('"', '')
                        props[prop[0]] = value
                else:
                    props = {}

                if component_name in self.components.keys():
                    html += self.components[component_name].parse(self.components[component_name], self.components, props)
                else:
                    raise ValueError("Lemon.Component: component not found/registered")
            else:
                pass
        html += f'{bootstrap5_js_cdn}<script>{reactive_code}</script>{self.script}</body></html>'
        return html

    def item(self, props: dict):
        """Item Function"""
        raise NotImplementedError("Lemon.Component: item() must be implemented")