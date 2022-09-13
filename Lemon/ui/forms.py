from unicodedata import name
from ..components import Component

class FormControl():
    def __init__(self) -> None:
        self.components = [self.Input, self.Select, self.Checkbox, self.Submit]

    class Input(Component):
        name = "Input"
        def item(props: dict):
            args = ["type", "id", "placeholder", "value", "text", "rows", "cols", "disabled", "readonly"]
            for arg in args:
                if arg not in list(props.keys()):
                    if arg == "type":
                        props[arg] = "text"
                    elif arg == "id":
                        raise ValueError("Lemon.FormControl.Input: id is required")
                    elif arg == "rows":
                        props[arg] = 3
                    elif arg == "cols":
                        props[arg] = 50
                    else:
                        props[arg] = ""
                else:
                    pass
            
            return f"""
            <label for=\"{props["id"]}\" class=\"form-label\">{props["text"]}</label>
            <input type=\"{props['type']}\" class=\"form-control\" id=\"{props['id']}\"{' rows='+props['rows']+' ' if props['type'] == 'textarea' else ''}{' cols='+props['cols']+' ' if props['type'] == 'textarea' else ' '} placeholder=\"{props['placeholder']}\" {props['disabled']} {props["readonly"]}/>
            """
    
    class Select(Component):
        name = "Select"
        def item(props: dict):
            args = ["id", "text", "options", "disabled", "readonly", "size"]
            for arg in args:
                if arg not in list(props.keys()):
                    if arg == "id":
                        raise ValueError("Lemon.FormControl.Select: id is required")
                    elif arg == "options":
                        raise ValueError("Lemon.FormControl.Select: options is required")
                    else:
                        props[arg] = ""
                else:
                    if arg == "options":
                        props[arg] = props[arg].split(",")
            
            option_text = ""
            selected_text = props["options"][0]
            props["options"].remove(selected_text)
            index = 1
            for option in props["options"]:
                option_text += f"""<option value={index} >{option}</option>"""
                index += 1

            return f"""
            <label for=\"{props["id"]}\" class=\"form-label {f'form-label-{props["size"]}' if props["size"] != "" else ""}\">{props["text"]}</label>
            <select class=\"form-select {f'form-label-{props["size"]}' if props["size"] != "" else ""}\" id=\"{props['id']}\" {props['disabled']} {props["readonly"]}>
                <option selected>{selected_text}</option>
                {option_text}
            </select>
            """

    class Checkbox(Component):
        name = "Checkbox"
        def item(props: dict):
            output = f"""
            <div class=\"form-check\">
                <input class=\"form-check-input\" type=\"{props["type"] if "type" in list(props.keys()) else "checkbox"}\" id=\"{props['id'] if "id" in list(props.keys()) else ""}\" {props['checked'] if 'checked' in list(props.keys()) else ''} {props['disabled'] if 'disabled' in list(props.keys()) else ''} {props["readonly"] if 'checked' in list(props.keys()) else ''}>
                <label class=\"form-check-label\" for=\"{props['id'] if "id" in list(props.keys()) else ''}\">
                    {props["text"] if "text" in list(props.keys()) else ""}
                </label>
            </div>
            """
            return output
        
    class Submit(Component):
        name = "Submit"
        def item(props: dict):
            args = ["id", "text", "disabled", "readonly"]
            for arg in args:
                if arg not in list(props.keys()):
                    if arg == "id":
                        raise ValueError("Lemon.FormControl.Submit: id is required")
                    else:
                        props[arg] = ""
                else:
                    pass
            
            return f"""
            <button type=\"submit\" class=\"btn btn-primary\" id=\"{props['id']}\" {props['disabled']} {props["readonly"]}>{props['text']}</button>
            """