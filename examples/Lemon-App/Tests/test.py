import pytest

def test_of_test(server, client):
    RESPONSE_TEXT = "THIS IS COOL"
    @api.route("/test")
    def test():
        return RESPONSE_TEXT
    assert client.get("http://testserver/hey").text == RESPONSE_TEXT
