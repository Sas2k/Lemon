from .DBManager import SQLConnectionManager


class Migrate:
    def __init__(self, model_list):
        self.model_list = model_list
        pass

    def migrate(self):
        print("Begin database Migration ...")
        for element in self.model_list:
            print()
            Elem = element()
            print(f"{Elem.tablename} Migration")
            with SQLConnectionManager("model.db") as Connection:
                Connection.create_table(tablename=Elem.tablename, fields=Elem.fields)
            print()


class MigrateCommand:
    def __init__(self, model_list):
        self.model_list = model_list
        pass

    def migrate(self):
        mig = Migrate(self.model_list)
        mig.migrate()
