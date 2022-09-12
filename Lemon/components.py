"""
Lemon: Experimental Front-end for Python
Component: Base class for all components
By Sasen Perera 2022
"""
import re

class Component():
    def __init__(self, name):
        """Init Function"""
        self.name = name
        self.components = {}

    def add(self, component):
        """Add Component"""
        self.components[component.name] = component

    def parse(self, prop: list):
        """Render Function"""
        component = self.item(props=prop)
        if type(component) != str:
            raise TypeError("Lemon.Component: item() must return a string")
            
        def parse_html(component):
            component = component.split("\n")
            body_code = ""
            for item in component:
                component = item.replace("<", "").replace("/>", "")
                component_name = component.split(" ", 1)[0]
                if component_name in self.components.keys():
                    component_props = component.split(" ", 1)[1] if len(component.split(" ")) > 1 else ""
                    component_props = re.split(r"(?<=')\s+(?=\w)", component_props)
                    props = {}
                    for prop in component_props:
                        prop = prop.split("=")
                        value = prop[1].replace("'", "") if prop[1][0] == "'" else prop[1].replace('"', '')
                        props[prop[0]] = value
                    body_code += self.components[component_name].parse_html(self.components[component_name], props)
                else:
                    body_code += item

            return body_code
        
        body_code = parse_html(component)
        return f"""{body_code}"""

    def render(self, app: str):
        """Render App"""
        app = app.split("\n") if "\n" in app else app.split("/>")
        bootstrap5_css_cdn = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css">'
        bootstrap5_js_cdn = '<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/js/bootstrap.bundle.min.js"></script>'
        html = f"<!DOCTYPE html><html><head><title>{self.name}</title>{bootstrap5_css_cdn}</head><body>"
        for component in app:
            if component != "":
                component = component.replace("<", "").replace("\t", "")
                component_name = component.split(" ", 1)[0]
                component_props = component.split(" ", 1)[1] if len(component.split(" ")) > 1 else ""
                if component_props != "":
                    component_props = re.split(r"(?<=')\s+(?=\w)", component_props)
                    props = {}
                    for index in range(len(component_props)):
                        prop = component_props[index].split("=")
                        value = prop[1].replace("'", "") if prop[1][0] == "'" else prop[1].replace('"', '')
                        props[prop[0]] = value
                else:
                    props = {}

                if component_name in self.components.keys():
                    html += self.components[component_name].parse(self.components[component_name], props)
                else:
                    raise ValueError("Lemon.Component: component not found/registered")
            else:
                pass
            
        html += f"{bootstrap5_js_cdn}</body></html>"
        return html

    def item(self, props: dict):
        """Item Function"""
        raise NotImplementedError("Lemon.Component: item() must be implemented")