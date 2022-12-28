from .multipart_data_handle import MultiPartDataHandler


class Form(MultiPartDataHandler):
    """Form Methods"""

    def __init__(self, request):
        self.request = request
        self.data = {}
        self.files = {}
        self.errors = {}

    def parse(self):
        """Parse Form Data"""
        if self.request.content_type.startswith("multipart/form-data"):
            multipart_data_handler = MultiPartDataHandler(self.request)
            multipart_data_handler.parse()
            self.data = multipart_data_handler.get_data()
            self.files = multipart_data_handler.get_files()
        else:
            self.data = self.request.POST
            self.files = self.request.files

    def validate(self, validators):
        """Validate Form Data"""
        for name, value in self.data.items():
            if name in validators:
                validator = validators[name]
                if not validator(value):
                    self.errors[name] = "Invalid Value"

    def get_data(self):
        """Get Data"""
        return self.data

    def get_files(self):
        """Get Files"""
        return self.files

    def get_errors(self):
        """Get Errors"""
        return self.errors

    def is_valid(self):
        """Is Valid"""
        return len(self.errors) == 0

    def get_error(self, name):
        """Get Error"""
        return self.errors[name]

    def get_value(self, name):
        """Get Value"""
        return self.data[name]
