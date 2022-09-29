import sqlite3 as sql3
import datetime

class SQLConnectionManager:
    """SQL Connection Manager"""

    def __init__(self,filename):
        """SQL Connection Manager: Init"""
        self.filename = filename
        self.connection = sql3.connect(filename)
        self.cursor = self.connection.cursor()

    def __enter__(self):
        """when the class is entered as a context manager"""
        print("Connection started ...")
        self.connection = sql3.connect(self.filename)
        self.cursor = self.connection.cursor()
        return self

    def commit(operation):
        """Commit Operation"""
        def wrapper(self, tablename, fields):
            operation(self, tablename, fields)
            self.connection.commit()
            print(f"{datetime.datetime.now()}: Commit is successful!!")
        return wrapper

    @commit
    def create_table(self, tablename, fields):
        """Create Table"""
        fields = list(fields)
        fields = " text, ".join(fields) +" text"
        drop_command = f"DROP TABLE IF EXISTS {tablename}"
        create_command = f"CREATE TABLE {tablename} ({fields})"
        try:
            self.cursor.execute(drop_command)
            self.cursor.execute(create_command)
        except sql3.Error as er:
            print(f"SQLite error: {' '.join(er.args)}")
        finally:
            print(f"{tablename}: created successfully!")

    @commit
    def insert(self, tablename, fields: list):
        """Insert"""
        print(fields)
        values = fields[1]
        fields = fields[0]
        print(fields)
        print(values)
        fields = ", ".join(fields)
        values = ", ".join(values)
        insert_command = f"INSERT INTO {tablename} ({fields}) VALUES ({values})"
        try:
            self.cursor.execute(insert_command)
        except sql3.Error as er:
            print(f"SQLite error: {' '.join(er.args)}")

    @commit
    def delete(self, tablename, fields):
        """Delete"""
        delete_command = f"DELETE FROM {tablename} WHERE {fields[0]} = {fields[1]}"
        try:
            self.cursor.execute(delete_command)
        except sql3.Error as er:
            print(f"SQLite error: {' '.join(er.args)}")

    @commit
    def update(self, tablename, fields):
        """Update"""
        update_command = f"UPDATE {tablename} SET {fields[0]} = {fields[1]} WHERE {fields[2]} = {fields[3]}"
        try:
            self.cursor.execute(update_command)
        except sql3.Error as er:
            print(f"SQLite error: {' '.join(er.args)}")

    @commit
    def select(self, tablename, fields):
        """Select"""
        select_command = f"SELECT {fields[0]} FROM {tablename} WHERE {fields[1]} = {fields[2]}"
        try:
            self.cursor.execute(select_command)
            return self.cursor.fetchall()
        except sql3.Error as er:
            print(f"SQLite error: {' '.join(er.args)}")

    @commit
    def drop_table(self, tablename, fields = None):
        """Drop Table"""
        drop_command = f"DROP TABLE IF EXISTS {tablename}"
        try:
            self.cursor.execute(drop_command)
        except sql3.Error as er:
            print(f"SQLite error: {' '.join(er.args)}")

    @commit
    def get_column(self, tablename, fields):
        """Get Column"""
        get_column_command = f"SELECT {fields[0]} FROM {tablename}"
        try:
            self.cursor.execute(get_column_command)
            return self.cursor.fetchall()
        except sql3.Error as er:
            print(f"SQLite error: {' '.join(er.args)}")

    @commit
    def get_table(self, tablename, fields = None):
        """Get Table"""
        get_table_command = f"SELECT * FROM {tablename}"
        try:
            self.cursor.execute(get_table_command)
            return self.cursor.fetchall()
        except sql3.Error as er:
            print(f"SQLite error: {' '.join(er.args)}")

    @property
    def show_tables(self):
        """Show Tables"""
        command = "SELECT * FROM sqlite_master WHERE type='table';"
        return self.cursor.execute(command)

    @property
    def show_columns(self):
        """Show Columns"""
        command = "SELECT * FROM sqlite_master WHERE type='table';"
        return self.cursor.execute(command)

    @property
    def show_rows(self):
        """Show Rows"""
        command = "SELECT * FROM sqlite_master WHERE type='table';"
        return self.cursor.execute(command)

    def __exit__(self, type, value, traceback):
        """when the class is exited as a context manager"""
        print("Connection ended ...")
        self.connection.close()

class base:
    """Base Class"""
    def __init__(self,model):
        self.Model = model

class MetaModel(type):
    """Meta Model"""
    base_model = base

class baseModel(metaclass=MetaModel):
    """Base Model"""
    tablename = ""