import pytest

from Server.server import Server


@pytest.fixture
def server():
    return Server()

@pytest.fixture
def client(server):
    return server.test_session()