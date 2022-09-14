"""
Lemon: Experimental Front-end for Python
Component: Base class for all components
By Sasen Perera 2022
"""
import re

class Component():
    def __init__(self, name, stylesheet = None, script = None):
        """Init Function"""
        self.name = name
        self.style = stylesheet if stylesheet != None else ""
        self.script = script if script != None else ""
        self.components = {}

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
        style = open(self.style, "w+").read() if self.style != "" else ""
        script = open(self.script, "w+").read().replace("\n", "") if self.script != "" else ""
        html = f"<!DOCTYPE html><html><head><title>{self.name}</title>{bootstrap5_css_cdn}<style>{style}</style></head><body>"
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
            
        html += f"{bootstrap5_js_cdn}<script src=\"{script}\"></script></body></html>"
        return html

    def item(self, props: dict):
        """Item Function"""
        raise NotImplementedError("Lemon.Component: item() must be implemented")