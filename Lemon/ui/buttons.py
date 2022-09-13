"""
Lemon.ui: Buttons
By Sasen Perera 2022
"""
from ..components import Component

class Buttons():
    def __init__(self) -> None:
        self.components = [self.primary_button, self.secondary_button, self.success_button, self.danger_button, self.warning_button, self.info_button, self.light_button, self.dark_button, self.link_button]
    
    class primary_button(Component):
        name = "primary_button"
         
        def item(props: dict):
            if "text" not in list(props.keys()):
                raise ValueError("Lemon.primary_button: text is required")
            elif "onclick" not in list(props.keys()):
                props["onclick"] = ""
            elif "size" not in list(props.keys()):
                props["size"] = ""

            return f"""<button type=\"button\" class=\"btn btn-primary btn-{props['size']}\" onclick=\"{props["onclick"]}\">{props["text"]}</button>"""

    class secondary_button(Component):
        name = "secondary_button"
         

        def item(props: dict):
            if "text" not in list(props.keys()):
                raise ValueError("Lemon.secondary_button: text is required")
            elif "onclick" not in list(props.keys()):
                props["onclick"] = ""
            elif "size" not in list(props.keys()):
                props["size"] = ""

            return f"""<button type=\"button\" class=\"btn btn-secondary btn-{props['size']}\" onclick=\"{props["onclick"]}\">{props["text"]}</button>"""

    class success_button(Component):
        name = "success_button"
         
        def item(props: dict):
            if "text" not in list(props.keys()):
                raise ValueError("Lemon.success_button: text is required")
            elif "onclick" not in list(props.keys()):
                props["onclick"] = ""
            elif "size" not in list(props.keys()):
                props["size"] = ""

            return f"""<button type=\"button\" class=\"btn btn-success btn-{props['size']}\" onclick=\"{props["onclick"]}\">{props["text"]}</button>"""

    class danger_button(Component):
        name = "danger_button"

        def item(props: dict):
            if "text" not in list(props.keys()):
                raise ValueError("Lemon.danger_button: text is required")
            elif "onclick" not in list(props.keys()):
                props["onclick"] = ""
            elif "size" not in list(props.keys()):
                props["size"] = ""
            
            return f"""<button type=\"button\" class=\"btn btn-danger btn-{props['size']}\" onclick=\"{props["onclick"]}\">{props["text"]}</button>"""

    class warning_button(Component):
        name = "warning_button"

        def item(props: dict):
            if "text" not in list(props.keys()):
                raise ValueError("Lemon.warning_button: text is required")
            elif "onclick" not in list(props.keys()):
                props["onclick"] = ""
            elif "size" not in list(props.keys()):
                props["size"] = ""
            
            return f"""<button type=\"button\" class=\"btn btn-warning btn-{props['size']}\" onclick=\"{props["onclick"]}\">{props["text"]}</button>"""

    class info_button(Component):
        name = "info_button"

        def item(props: dict):
            if "text" not in list(props.keys()):
                raise ValueError("Lemon.info_button: text is required")
            elif "onclick" not in list(props.keys()):
                props["onclick"] = ""
            elif "size" not in list(props.keys()):
                props["size"] = ""

            return f"""<button type=\"button\" class=\"btn btn-info{props['size']}\" onclick=\"{props["onclick"]}\">{props["text"]}</button>"""

    class light_button(Component):
        name = "light_button"

        def item(props: dict):
            if "text" not in list(props.keys()):
                raise ValueError("Lemon.light_button: text is required")
            elif "onclick" not in list(props.keys()):
                props["onclick"] = ""
            elif "size" not in list(props.keys()):
                props["size"] = ""

            return f"""<button type=\"button\" class=\"btn btn-light{props['size']}\" onclick=\"{props["onclick"]}\">{props["text"]}</button>"""

    class dark_button(Component):
        name = "dark_button"
         
        def item(props: dict):
            if "text" not in list(props.keys()):
                raise ValueError("Lemon.dark_button: text is required")
            elif "onclick" not in list(props.keys()):
                props["onclick"] = ""
            elif "size" not in list(props.keys()):
                props["size"] = ""

            return f"""<button type=\"button\" class=\"btn btn-dark{props['size']}\" onclick=\"{props["onclick"]}\">{props["text"]}</button>"""

    class link_button(Component):
        name = "link_button"
         
        def item(props: dict):
            if "text" not in list(props.keys()):
                raise ValueError("Lemon.link_button: text is required")
            elif "onclick" not in list(props.keys()):
                props["onclick"] = ""
            elif "size" not in list(props.keys()):
                props["size"] = ""
            
            return f"""<button type=\"button\" class=\"btn btn-link{props['size']}\" onclick=\"{props["onclick"]}\">{props["text"]}</button>"""
