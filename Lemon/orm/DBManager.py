"""
Lemon.orm: DBManager
By Sasen Perera 2023
"""

import sqlite3 as sql3

class SQLConnectionManager:
    """SQL Connection Manager"""

    def __init__(self, filename):
        """Initialize the connection manager"""
        self.filename = filename
        self.connection = sql3.connect(self.filename, check_same_thread=False)
        self.cursor = self.connection.cursor()

    def __enter__(self):
        """Start the connection"""
        print("Connection started ...")
        self.connection = sql3.connect(self.filename)
        self.cursor = self.connection.cursor()
        return self

    def commit(operation):
        """Commits the command to the database"""
        def wrapper(self, *args, **kwargs):
            operation(self, *args, **kwargs)
            self.connection.commit()
            print("Lemon.orm: Commit Successful")

        return wrapper

    @commit
    def create_table(self, tablename, fields):
        """Creates a table in the database"""
        fields = list(fields)
        fields = " text, ".join(fields) + " text"
        drop_command = f"DROP TABLE IF EXISTS {tablename}"
        create_command = f"CREATE TABLE {tablename} ({fields})"
        try:
            self.cursor.execute(drop_command)
            self.cursor.execute(create_command)
        except sql3.Error as er:
            print(f"SQLite error: {' '.join(er.args)}")
        finally:
            print(f"{tablename}: created successfully!")

    @property
    def show_tables(self):
        """Shows all the tables in the database"""
        command = "SELECT * FROM sqlite_master WHERE type='table';"
        return self.cursor.execute(command)

    def __exit__(self, type, value, traceback):
        """End the connection"""
        print("Connection ended ...")
        self.connection.close()


class SqliteManager:
    """Sqlite Manager"""

    def __init__(self, filename):
        """Initialize the connection manager"""

        self.filename = filename
        self.connection = sql3.connect(self.filename, check_same_thread=False)
        self.cursor = self.connection.cursor()

    def __enter__(self):
        """Start the connection"""

        return self

    def commit(operation):
        """Commits the command to the database"""

        def wrapper(self, *args, **kwargs):
            op = operation(self, *args, **kwargs)
            op
            self.connection.commit()
            print("Lemon.orm: Commit Successful")
            return op

        return wrapper

    @commit
    def create_table(self, tablename, columns):
        """Creates a table in the database"""

        columns = list(columns)
        columns = " text, ".join(columns) + " text"
        drop_command = f"DROP TABLE IF EXISTS {tablename}"
        create_command = f"CREATE TABLE {tablename} ({columns});"
        try:
            self.cursor.execute(drop_command)
            self.cursor.execute(create_command)
        except sql3.Error as er:
            print(f"SQLite error: {' '.join(er.args)}")
        finally:
            print(f"{tablename}: created successfully!")

    @commit
    def insert(self, tablename, columns, values):
        """Inserts a row into the database"""

        column = ", ".join(columns) if len(columns) > 1 else columns
        value = ", ".join(f'"{value}"' for value in values) if len(values) > 1 else values
        command = f"INSERT INTO {tablename} ({column}) VALUES ({value});"
        try:
            self.cursor.execute(command)
        except sql3.Error as er:
            print(f"SQLite error: {' '.join(er.args)}")

    @commit
    def select(self, tablename, columns):
        """Selects a row from the database"""

        columns = ", ".join(columns) if len(columns) > 1 else columns
        command = f"SELECT {columns} FROM {tablename};"
        try:
            self.cursor.execute(command)
            out = self.cursor.fetchall()
            return out
        except sql3.Error as er:
            print(f"SQLite error: {' '.join(er.args)}")

    @commit
    def delete(self, tablename, conditions, logic="AND"):
        """Deletes a row from the database"""

        conditions = (
            f" {logic} ".join(conditions) if len(conditions) > 1 else conditions
        )
        command = f"DELETE FROM {tablename} WHERE {conditions};"
        try:
            self.cursor.execute(command)
        except sql3.Error as er:
            print(f"SQLite error: {' '.join(er.args)}")
        finally:
            print(f"{tablename}: deleted successfully!")

    @commit
    def update(self, tablename, columns, values):
        """Updates a row in the database"""

        columns = list(columns)
        values = list(values)
        if len(columns) != len(values):
            raise ValueError("The number of columns and values must be the same!")
        else:
            output = ""
            for i in range(len(columns)):
                if i == len(columns) - 1:
                    output += f"{columns[i]} = '{values[i]}'"
                else:
                    output += f"{columns[i]} = '{values[i]}',"
            command = f"UPDATE {tablename} SET {output};"
            print(command)
            try:
                self.cursor.execute(command)
            except sql3.Error as er:
                print(f"SQLite error: {' '.join(er.args)}")
            finally:
                print(f"{tablename}: updated successfully!")

    def __exit__(self, type, value, traceback):
        """End the connection"""
        
        self.connection.close()


class base:
    """Base Class"""

    def __init__(self, model):
        self.Model = model


class MetaModel(type):
    """Meta Model"""

    base_model = base


class baseModel(metaclass=MetaModel):
    """Base Model"""

    tablename = ""
