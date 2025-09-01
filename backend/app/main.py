from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from . import db, models, schemas, crud

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], allow_credentials=True,
    allow_methods=["*"], allow_headers=["*"],
)

def get_db():
    d = db.SessionLocal()
    try:
        yield d
    finally:
        d.close()

@app.on_event("startup")
def startup():
    models.Base.metadata.create_all(bind=db.engine)

@app.get("/tasks", response_model=list[schemas.TaskOut])
def list_all(d: Session = Depends(get_db)):
    return crud.list_tasks(d)

@app.post("/tasks", response_model=schemas.TaskOut, status_code=201)
def create(payload: schemas.TaskCreate, d: Session = Depends(get_db)):
    return crud.create_task(d, payload)

@app.put("/tasks/{task_id}", response_model=schemas.TaskOut)
def update(task_id: int, payload: schemas.TaskUpdate, d: Session = Depends(get_db)):
    t = crud.update_task(d, task_id, payload)
    if not t:
        raise HTTPException(status_code=404, detail="Task not found")
    return t

@app.delete("/tasks/{task_id}", status_code=204)
def delete(task_id: int, d: Session = Depends(get_db)):
    ok = crud.delete_task(d, task_id)
    if not ok:
        raise HTTPException(status_code=404, detail="Task not found")
