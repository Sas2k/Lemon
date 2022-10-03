# Tutorial Part 4: Storing the requests and Displaying them as Posts

In this part, we're going to store the requests, and then we're going to display them. as pages.

To store them, we're going to create a `posts` list.

```python
posts = [{"title": "Hello World", "author": "Lemon", "body": "This is a test post"}]
```

now let's change the return of the item function in the App Component to this,

```python
return f"<BlogPost title={props['title']} author={props['author']} body={props['body']}/>"
```

also let's change the "/" route to "/{post_id}" and add these.

```python
@app.route("/{post_id}")
def home(request, response, post_id):
    if post_id.isdigit():
        try:
            post = posts[int(post_id)-1]
            response.text = Root.render(f'<App title={post["title"]} author={post["author"]} body={post["body"]}/>')
        except IndexError:
            response.status_code = 404
            response.text = "<h3>Post not found</h3>"
    else:
        response.text = "<h3>This id should be an integer, Not String</h3>"
```

also remember the API routes, let's change them like this.

```python
@app.route("/api/get/{post_id}") # the {id} is an argument in the url.
def api_get(request, response, post_id):
    #for now let's just return the post_id
    response.text = posts[post_id]

@app.route('/api/post/')
class api_post():
    def get(self, req, res):
        res.text = "method not allowed"
    def post(self, req, res):
        json = req.json
        if json["title"] and json["body"] and json["author"] and json["id"]:
            post_id = int(json["id"])
            if post_id not in posts:
                posts[post_id] = json
                res.text = "success"
            else:
                posts.append(json)
                res.text = "success"
        else:
            res.text = "failed"
```

And now run, the app.

Try going to. https://localhost:8000/1

and you should see the Test Post.

you can create a your own posts by sending post requests to `/api/post`

here is an example body

```json
{
    "title": "Hello World",
    "author": "Sas2k",
    "body": "Lorem Ispum Dorem Alamet"
}
```

And that's about it.

We've created a fully functioning App in Lemon.

Now let's move to part 5, to style the blog.