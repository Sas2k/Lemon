import sqlite3 as sql3
import datetime


class SQLConnectionManager():
    def __init__(self,filename):
        self.filename = filename
        self.connection = sql3.connect(self.filename)
        self.cursor = self.connection.cursor()

    def __enter__(self):
        print("Connection started ...")
        self.connection = sql3.connect(self.filename)
        self.cursor = self.connection.cursor()
        return self

    def commit(operation):
        def wrapper(self, tablename, fields):
            operation(self, tablename, fields)
            self.connection.commit()
            print(f"{datetime.datetime.now()}: Commit is successful!!")
        return wrapper

    @commit
    def create_table(self, tablename, fields):
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

    def alter_table(self, ):
        pass

    @property
    def show_tables(self):
        command = "SELECT * FROM sqlite_master WHERE type='table';"
        return self.cursor.execute(command)

    def __exit__(self, type, value, traceback):
        print("Connection ended ...")
        self.connection.close()


class SqliteManager():
    def __init__(self, filename):
        self.filename = filename
        self.connection = sql3.connect(self.filename)
        self.cursor = self.connection.cursor()

    def __enter__(self):
        return self

    def commit(operation):
        def wrapper(self, tablename, fields):
            operation(self, tablename, fields)
            self.connection.commit()
            print(f"{datetime.datetime.now()}: Commit is successful!!")
        return wrapper

    @commit
    def create_table(self, tablename, fields):
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
    def insert(self, tablename, fields):
        fields = list(fields)
        print(fields)
        values = fields[1]
        fields = fields[0]
        fields = ", ".join(fields)
        values = ", ".join(values)
        print(fields, values)
        command = f"INSERT INTO {tablename} ({fields}) VALUES ({values})"
        print(command)
        self.cursor.execute(command)

    @commit
    def update(self, tablename, fields):
        fields = list(fields)
        values = fields[1]
        fields = fields[0]
        fields = ", ".join(fields)
        values = ", ".join(values)
        command = f"UPDATE {tablename} SET {fields} WHERE {values}"
        self.cursor.execute(command)

    @commit
    def delete(self, tablename, fields):
        fields = list(fields)
        values = fields[1]
        fields = fields[0]
        fields = ", ".join(fields)
        values = ", ".join(values)
        command = f"DELETE FROM {tablename} WHERE {fields} = {values}"
        self.cursor.execute(command)
    
    @commit
    def select(self, tablename, fields):
        fields = list(fields)
        values = fields[1]
        fields = fields[0]
        fields = ", ".join(fields)
        values = ", ".join(values)
        command = f"SELECT {fields} FROM {tablename} WHERE {values}"
        self.cursor.execute(command)
        return self.cursor.fetchall()

    @commit
    def select_all(self, tablename):
        command = f"SELECT * FROM {tablename}"
        self.cursor.execute(command)
        return self.cursor.fetchall()

    @property
    def show_tables(self):
        command = "SELECT * FROM sqlite_master WHERE type='table';"
        return self.cursor.execute(command)

    @property
    def show_columns(self):
        command = "SELECT * FROM sqlite_master WHERE type='table';"
        return self.cursor.execute(command)

    def __exit__(self, type, value, traceback):
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