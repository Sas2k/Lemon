---
title: Lemon.orm.migrations
sidebar_position: 7
---

# Lemon.orm.migrations

The migrations manager

```python
from Lemon.orm import DBManager, migrations

baseModel = DBManager.baseModel
ClassBase = DBManager.base
migrate = migrations.MigrateCommand

class model(baseModel):
    base_model = ClassBase
    tablename = "model"
    fields = ("field1", "field2")

model_list = [model]

migrate(model_list).migrate()
```

## Migrate [Class] | (self, model_list) < Developer-Class >

The migrate command for the Lemon ORM

### Attributes, Properties and Functions

- #### migrate [Function] | (self)

migrates the models to a Database.

## MigrateCommand [Function] | (model_list)

The base function for the migrate function.

## Attributes, Properties and Functions

- #### migrate [Function] | (self)

The migrate function which is used in base.py

```python
model_list = [model]

migrate(model_list).migrate()
```