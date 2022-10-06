import sqlite3 as sql3
import datetime

class SQLConnectionManager():
    def __init__(self,filename):
        self.filename = filename
        self.connection = sql3.connect(self.filename, check_same_thread=False)
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
        self.cursor = sql3.connect(filename).cursor()

    def __enter__(self):
        return self

    def create_table(self, tablename, columns):
        columns = list(columns)
        columns = " text, ".join(columns) +" text"
        drop_command = f"DROP TABLE IF EXISTS {tablename}"
        create_command = f"CREATE TABLE {tablename} ({columns})"
        try:
            self.cursor.execute(drop_command)
            self.cursor.execute(create_command)
        except sql3.Error as er:
            print(f"SQLite error: {' '.join(er.args)}")
        finally:
            print(f"{tablename}: created successfully!")

    def insert(self, tablename, columns, values):
        column = ", ".join(columns) if len(columns) > 1 else columns
        value = ", ".join(values) if len(values) > 1 else values
        command = f"INSERT INTO {tablename} ({column}) VALUES ({value})"
        try:
            self.cursor.execute(command)
        except sql3.Error as er:
            print(f"SQLite error: {' '.join(er.args)}")

    def select(self, tablename, columns):
        columns = ", ".join(columns) if len(columns) > 1 else columns
        command = f"SELECT {columns} FROM {tablename}"
        try:
            self.cursor.execute(command)
        except sql3.Error as er:
            print(f"SQLite error: {' '.join(er.args)}")
        finally:
            return self.cursor.fetchall()

    def delete(self, tablename, conditions, logic="AND"):
        conditions =f" {logic} ".join(conditions) if len(conditions) > 1 else conditions
        command = f"DELETE FROM {tablename} WHERE {conditions}"
        try:
            self.cursor.execute(command)
        except sql3.Error as er:
            print(f"SQLite error: {' '.join(er.args)}")
        finally:
            print(f"{tablename}: deleted successfully!")

    def update(self, tablename, columns, values):
        columns = list(columns)
        values = list(values)
        if len(columns) != len(values):
            raise ValueError("The number of columns and values must be the same!")
        else:
            columns = ", ".join(columns)
            values = ", ".join(values)
            command = f"UPDATE {tablename} SET {columns} = {values}"
            try:
                self.cursor.execute(command)
            except sql3.Error as er:
                print(f"SQLite error: {' '.join(er.args)}")
            finally:
                print(f"{tablename}: updated successfully!")

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