# Part 3: Building the api.

Now that we got the basic front-end down.

We now have to focus on the back-end, which is the API.

let's start of by creating a routes called /api/get and /api/post

so the basic decorator to create the route is.

```python
@app.route("/route")
def route(request, response):
    response.text = "route"
```

now since /api/get is uses a `GET` method we can just make it a normal route.

```python
@app.route("/api/get/{post_id:d}") # the {post_id} is an argument in the url. the d means digit.
def api_get(request, response, post_id):
    #for now let's just return the post_id
    response.json = { "post_id": post_id }
```

now for the /api/post we have to use a class for this.

```python
@app.route('/app/post/')
class api_post():
    def get(self, req, res):
        res.text = "method not allowed"
    def post(self, req, res):
        print(req.json)
```

here the body of the request is printed.
now the basic api is implemented let's move to part 4.