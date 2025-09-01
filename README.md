# ToDo App

## Overview
A simple ToDo application with a **React + TypeScript frontend** and **FastAPI + Postgres backend**.  
Tasks can be created, marked complete, updated, and deleted, with persistence in Postgres.

## Backend
- **Framework:** FastAPI  
- **Database:** PostgreSQL (SQLAlchemy ORM)  
- **CORS:** Enabled for frontend access  

### How to run:
1. Navigate to the backend folder:
cd backend

2. Install dependencies (if using virtual environment):
pip install -r requirements.txt

3. Start the FastAPI server:
uvicorn app.main:app --reload
API will run at: http://localhost:8000

**Frontend**
- **Framework**: React + TypeScript
- **Generated with**: Lovable

**How to run:**
1. Navigate to the frontend folder:
cd frontend

2. Install dependencies:
npm install

3. Create a .env file if not present:
VITE_API_BASE_URL=http://localhost:8000

4. Start the frontend:
npm run dev
Open the URL shown in the terminal 

**TODOs**
1. Could have used Docker to simplify backend + database setup.
2. Could have added Doc strings and remark in the code to make it more readable and maintainable
3. UI could be further polished for better UX.
4. Could add user authentication for login and task ownership.
5. could have tested the app more extensively and add error handling where necessary


**Time Spent**
51 mins used to complete the task and run basic test ensuring app was working

**How I tackled the task**

**Backend**: Used ChatGPT to quickly draft FastAPI backend and edited for correctness.
**Frontend**: Created the UI in Lovable, then edited it to integrate cleanly with the backend API.
**Tools used**: Python, FastAPI, SQLAlchemy, PostgreSQL, React + TypeScript, Lovable, ChatGPT.
**Notes**: I leveraged ChatGPT to speed up development and streamline the process, allowing me to complete the app within the time limit. ChatGPT played a key role in the development workflow and highlighted how valuable AI can be for developers in building applications efficiently.
