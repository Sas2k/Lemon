---
title: Lemon vs React
sidebar_position: 4
---
# Lemon vs React.

In this page we're going to talk about the differences of Lemon and React.

## TLDR; What is React?

React is a front-end framework for JavaScript, it's used to build Interactive UIs. ([Website](https://reactjs.org/))

**Now let's compare them feature at a time**

## Components

Now let's talk about components, Both of the libraries use Components.

### Lemon [Python] (v1.0.0)

```python
class HelloMessage(Component):
    name = "HelloMessage"
    def item(props:dict):
        return f"<p>Hello! {props['name']}"

@app.route("/") #don't mind the app.route or the index function there just there to route the sever
def index(request, response):
    response.text = root.render("<HelloMessage name='Tyler'/>")
```

### React (JSX)

```jsx
function HelloMessage(props){
    return <div>Hello {props.name}</div>;
};

root.render(<HelloMessage name="tyler"/>)
```

The first one is in Lemon(Python),
The Second one is in React (JSX)

Here we have a simple component created in both.
Both of them are very similar. Except for the fact that since React uses JSX, you can write HTML directly.

## Reactivity

what reactivity does is when the information, variables change, the render changes automatically.

here is a To-Do example in both Lemon and React.

### Lemon (v1.0.0)

`app.py`

```python
class ToDo(Component):
    name = 'ToDo'
    def item(props:dict):
        return f"""
        <div>
            <ul id="Todo-List">
            </ul>
            <Input text="Enter Todo Item" id="Text"/>
        </div>
        """

@app.route("/")
def index(request, response):
    response.text = root.render("<ToDo/>")
```

`public/index.js`

```js
let todoitems = () => {
    data.message = document.getElementById("Text").value;
};

let updateToDo = () => {
    document.getElementById("Todo-List").appendChild('<li>' + data.message + '</li>\n');
};

watcher(updateToDo);
```

### React

> taken from homepage example.

```jsx
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

root.render(<TodoApp />);
```

Here as we can see, for lemon reactivity happens through a function called `watcher` which watched the function and it's variables to change, the `data.message` are the values that would change.

**And that's about it, for the differences... (I might add more soon...)**