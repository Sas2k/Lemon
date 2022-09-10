"""
Lemon: Experimental Front-end for Python
Component: Base class for all components
By Sasen Perera 2022
"""

class Component():
    def __init__(self, name):
        """Init Function"""
        self.name = name

    def render(self):
        """Render Function"""
        component = self.item()
        header_code = ""
        body_code = ""
        script = ""
        if type(component) == dict:
            pass
        else:
            raise TypeError("Lemon.Component: item() must return a dictionary")
        index = 0
        for key, value in component.items():
            if key == "title":
                header_code += f"<title>{value}</title>"
            elif key == "h1":
                body_code += f"<h1>{value}</h1>"
            elif key == "h2":
                body_code += f"<h2>{value}</h2>"
            elif key == "h3":
                body_code += f"<h3>{value}</h3>"
            elif key == "h4":
                body_code += f"<h4>{value}</h4>"
            elif key == "h5":
                body_code += f"<h5>{value}</h5>"
            elif key == "h6":
                body_code += f"<h6>{value}</h6>"
            elif key == "p":
                if value[0] and value [-1] == "*":
                    body_code += f"<p><strong>{value[2:-1]}</strong></p>"
                elif value[0] and value [-1] == "_":
                    body_code += f"<p><em>{value[2:-1]}</em></p>"
                else:
                    body_code += f"<p>{value}</p>"
            elif key == "a":
                value = value.split("|", 1)
                body_code += f"<a href=\"{value[0]}\">{value[1]}</a>"
            elif key == "br":
                body_code += "<br>"
            elif key == "script":
                script += f"{value}"
            elif key == "link":
                header_code += f"<link rel=\"stylesheet\" href=\"{value}\"/>"
            else:
                raise TypeError("Lemon.Component: Invalid key in dictionary")

        return f"""<!DOCTYPE html><html><head>{header_code}<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous"></head><body>{body_code}<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script><script>{script if script else ""}</script></body></html>"""