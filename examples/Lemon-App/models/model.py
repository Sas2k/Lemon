from Lemon.orm import DBManager

sql = DBManager.SQLConnectionManager("../model.db")
# inserts some fake data to field1 and field2
sql.insert("model", [("field1", "field2"), ("Hello", "World")])
