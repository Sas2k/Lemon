from Lemon.orm import DBManager, migrations

baseModel = DBManager.baseModel
ClassBase = DBManager.base
migrate = migrations.MigrateCommand

class model(baseModel):
    base_model = ClassBase
    table_name = "model"
    fields = ("field1", "field2")

model_list = [model]

migrate(model_list).migrate()