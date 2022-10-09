# Part 2: Writing the basic components.

now, let's create a directory(which is a fancy term for a folder.) and name it `Components`

in this folder we're going to create a folder called `components.py`

now we're going to write a basic component which has the title, the body and the author.

> Now before we write anything let me quickly give you the structure of a component.
> ```python
> class thing(Component):
>   name = "thing" # the name here will the name going to be used in `root.render()`
>   def item(props: dict):
>       return "<p>THING</p>" # the item function is where the html code is presented.
> ```

now firstly we need to import the `Component` class, which is the base class.
```python
from Lemon.components import Component
```

then let's write a basic post component

```python
class BlogPost(Component):
    name = "BlogPost"

    def item(props: dict):
        return f"""
        <div>
            <h2>{props['title']}</h2>
            <h3>By {props['author']}</h3>
            <br>
            <p>{props['body']}</p>
        </div>
        """
```

(you can change it however you like.)

now in the `app.py` file import it like this.
`from Components.components import BlogPost`

then change the Root.add function like this,

```python
Root.add(
    [
        App,
        BlogPost
    ]
)
```

now you can test it out by removing the "Hello World" from the App components `item` function, and adding the `BlogPost` one.

`<BlogPost title='Hello World' author='Your-Name' body='Lorem Ispum Dorem Almet why is this used everywhere?'/>`

(above is an example)

Now if you run it, you should see something like below.

-----------------------------

## Hello World
### Your-Name
Lorem Ispum Dorem Almet why is this used everywhere?

-----------------------------

Now, that the component is created an working let's move onto part 3.