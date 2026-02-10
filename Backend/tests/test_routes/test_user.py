def test_create_user(client):
    data = {"email":"aryan@gmail.com","password":"aryan@123"}
    response = client.post("/users/", json= data)
    assert response.status_code==201
    assert response.json()["email"]== "aryan@gmail.com"