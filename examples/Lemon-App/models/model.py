from Lemon.orm.DBManager import SqliteManager

sql = SqliteManager("model.db")
# inserts some fake data to field1 and field2
def insert_fake_data():
    sql.insert("model", ("field1", "field2"), ("Hello", "World"))
    print(sql.select("model", ("field1", "field2")))
    print("From model.py")
    sql.delete("model", ("field1='Hello'", "field2='World'"))
