---
title: Version 1.2.0 Release 💾
authors: Sas2k
---

# Version 1.2.0 💾

## Changes

- Changed the way, how the ORM functions
```python
#base.py
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
#models.py
from Lemon.orm.DBManager import SqliteManager

sql = SqliteManager("../model.db")
sql.insert("model", [("field1", "field2"), ("Hello", "World")])
```

- Finished the Tutorial on Docs.
  
- Updated `create-lemon-app`
  *`Models/Models.py`, `Models/__init__.py` and `app.py` updated*

- Added Versioning Tags to Docs

**Full Changelog**: https://github.com/Sas2k/Lemon/compare/V.1.0.0...V.1.2.0

_**Until Next Time Good Day people!**_