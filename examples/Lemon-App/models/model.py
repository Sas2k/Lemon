from Lemon.orm.DBManager import SqliteManager

sql = SqliteManager("../model.db")
# inserts some fake data to field1 and field2
def insert_fake_data():
    sql.insert("model", [("field1", "field2"), ("Hello", "World")])
