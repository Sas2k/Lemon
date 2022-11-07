from Lemon.Server import server
from Lemon.components import Component

app = server.Server(None)
root = Component(app)


class ExceptionComponent(Component):
    name = "ExceptionComponent"

    def item(props: dict):
        return """
        <style>
            body {
                background-color: #000;
                color: #fff;
            }
            h1 {
                font-size: 3rem;
                font-weight: 300;
                color: #0af0fa;
            }
            h2 {
                font-size: 2rem;
                font-weight: 300;
            }
            p {
                font-size: 1.5rem;
                font-weight: 300;
            }
        </style>
        <div class='container'>
            <h1>001010100101101010010100101</h1>
            <h2>Looks like something went wrong</h2>
            <p>Please try again later......</p>
        </div>
        """


def custom_exception_handler(request, response, exception_cls):
    response.text = root.render("<ExceptionComponent/>")


app.add_exception_handler(custom_exception_handler)

root.add([ExceptionComponent])


@app.route("/")
def index(request):
    raise AssertionError("ERRRRRRRROR! (So many R's)")


app.run()
