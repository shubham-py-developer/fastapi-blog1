#testing dependency injection for unit tests
from fastapi.testclient import TestClient
from practice import app, get_db_session 


testing_db = ["Test DB Session"]
def get_testing_db():
    return testing_db

app.dependency_overrides[get_db_session] = get_testing_db
client = TestClient(app)

def test_add_item_db():
    response = client.post("/items/?item=sugar")
    assert response.status_code == 200
    assert response.json() == {"message": "Item 'sugar' added to the database."}