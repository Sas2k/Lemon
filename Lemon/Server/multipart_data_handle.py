from webob.request import Request


class MultiPartDataHandler:
    """MultiPartDataHandler Methods"""

    def __init__(self, request: Request):
        self.request = request
        self.data = {}
        self.files = {}

    def parse(self):
        """Parse MultiPart Data"""
        boundary = self.request.content_type.split("=")[1]
        content = self.request.body.decode()
        lines = content.split("\r\n").split("\n")
        for line in lines:
            if line.startswith("--" + boundary):
                name = lines[1].split("=")[1]
                if lines[2] == "":
                    self.data[name] = lines[3]
                else:
                    self.files[name] = lines[3]
