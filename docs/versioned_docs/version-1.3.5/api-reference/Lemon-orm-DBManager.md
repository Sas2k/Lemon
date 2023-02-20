---
title: Lemon.orm.DBManager
sidebar_position: 6
---

# Lemon.orm.DBManager

The Database Manager

## SQLConnectionManager [Class] | (self, filename) < Developer-Class >

The SQLConnectionManager used in migrations

### Attributes, Properties and Functions

#### commit [Decorator(Functions)] | (operation)

Commits a query.

#### create_table [Function] | (self, tablename, fields)

creates a table

#### show_tables [Property(Function)] | (self)

shows the tables in the database

## SqliteManager [Class] | (self, filename)

The SQLite Manager.

```python
from Lemon.orm.DBManager import SqliteManager

sql = SqliteManager("model.db")

sql.select("authors", ["name", "age"])

sql.insert("authors", ["Paul", "age"], ["Paul", "25"])

```

### commit [Decorator(function)] | (operation) < Developer-Function >

Commits the query.

### create_table [Function] | (self, tablename, columns)

Creates a table in the Database.

```python
sql = SqliteManager("model.db")

sql.create_table("authors", ["name", "age"])
```

### insert [Function] | (self, tablename, columns, values)

inserts data to columns

```python
sql = SqliteManager("model.db")

sql.insert("authors", ["name", "age"], ["Paul", "25"])
```

### select [Function] | (self, tablename, columns)

selects columns from the table.


```python
sql = SqliteManager("model.db")

sql.select("authors", ["name", "age"])
```

### delete [Function] | (self, tablename, conditions, logic="AND")

Deletes a record from the table which matches the condition.

```python
sql = SqliteManager("model.db")

sql.delete("authors", ["name='paul'", "age=25"], "AND")
```

### update [Function] | (self, tablename, columns, values)

Update values in the Database.

```python
sql = SqliteManager("model.db")

sql.update("authors", ["name", "age"], ["Paul", "22"])
```

## base [Class] | (self) 

The Base Class to be inherited.

## baseModel [Class] | (self)

The Base Model to be inherited

## MetaModel [Class] | (self) < Developer-Class >

The MetaModel Class

> `base`, `baseModel` and `MetaModel` are used in the migrations.