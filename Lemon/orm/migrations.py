"""
Lemon.orm: Migrations
By Sasen Perera 2023
"""

from .DBManager import SQLConnectionManager

class Migrate:
    """Migrate class"""

    def __init__(self, model_list):
        """Constructor for Migrate class"""

        self.model_list = model_list
        pass

    def migrate(self):
        """Migrate the database"""

        print("[green underline]Begin database Migration ...[/green underline]")
        for element in self.model_list:
            print()
            Elem = element()
            print(f"[yellow]{Elem.tablename}[/yellow] Migration")
            with SQLConnectionManager("model.db") as Connection:
                Connection.create_table(tablename=Elem.tablename, fields=Elem.fields)
            print()


class MigrateCommand:
    """Migrate Command"""

    def __init__(self, model_list):
        """Constructor for MigrateCommand class"""

        self.model_list = model_list
        pass

    def migrate(self):
        """Migrate the database"""
        
        mig = Migrate(self.model_list)
        mig.migrate()
