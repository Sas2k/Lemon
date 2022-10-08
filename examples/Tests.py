import pytest

def client_can_send_requests(server, client):
    RESPONSE_TEXT = "THIS IS COOL"
    @server.route("/test")
    def test(request, response):
        response.text = RESPONSE_TEXT

    assert client.get("http://testserver/hey").text == RESPONSE_TEXT