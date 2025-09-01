from sqlalchemy.orm import Session
from .schemas import TaskCreate, TaskUpdate
from .models import Task

def list_tasks(db: Session):
    return db.query(Task).order_by(Task.id.desc()).all()

def create_task(db: Session, data: TaskCreate):
    t = Task(title=data.title)
    db.add(t); db.commit(); db.refresh(t)
    return t

def update_task(db: Session, task_id: int, data: TaskUpdate):
    t = db.get(Task, task_id)
    if not t: return None
    if data.title is not None:
        t.title = data.title
    if data.completed is not None:
        t.completed = data.completed
    db.commit(); db.refresh(t)
    return t

def delete_task(db: Session, task_id: int) -> bool:
    t = db.get(Task, task_id)
    if not t: return False
    db.delete(t); db.commit()
    return True
