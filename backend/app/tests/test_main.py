from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_health_check():
    r = client.get("/tasks")
    assert r.status_code == 200

def test_create_task():
    r = client.post("/tasks", json={"title": "My first task"})
    assert r.status_code == 201
    assert r.json()["title"] == "My first task"
