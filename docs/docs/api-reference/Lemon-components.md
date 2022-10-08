---
title: Lemon.components
sidebar_position: 1
---

# Lemon.components

The module responsible for initializing and creating components.

## Component [Class] | (self, name, stylesheet=None, script=None)

The base component class

```python
class TestComponent(Component):
    name = "TestComponent"

    def item(props: dict):
        return """
        <h1>Hello World!</h1>
        <p>Lorem ispum</p>
        """
```

> When naming Components, Always make the first letter Capital as if your writing names.

### Attributes, Properties and Functions

- #### add [Function] | (self, components: list or object)

Adds a component(s) to a list. to parse.

```python
Root.add(
    [
        Component,
        Testing,
        WarningComponent
    ]
)
```

- #### parse [Function] | (self, Root, prop: list) | < Developer-Function >

The function that parses the string.

- #### render [Function] | (self, app: str)

The function that will render the component

```python
response.text = Root.render("<WarningComponent/>")
```

- #### item [Function] | (self, props: dict)

The function where the components html/elements are present

```python
# must be inside your component class.
def item(props: dict):
    return f"""
    <h1>{props['title']}</h1>
    <p>{props['body']}</p>
    """
```
