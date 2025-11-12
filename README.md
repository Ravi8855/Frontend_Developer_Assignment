# 🌐 Frontend Developer Assignment

A full-stack task management web app built with **Next.js**, **TailwindCSS**, **Node.js (Express)**, and **SQLite (via Sequelize)**.  
Deployed on **Vercel** (frontend) and **Render** (backend).

---

## 🚀 Live Links

| Service | URL |
|----------|-----|
| **Frontend (Vercel)** | [https://frontend-developer-assignment-six.vercel.app](https://frontend-developer-assignment-six.vercel.app) |
| **Backend (Render)** | [https://frontend-developer-assignment-2.onrender.com](https://frontend-developer-assignment-2.onrender.com) |

---

## 🧠 Project Overview

This project demonstrates a complete full-stack web application with:

- 🔐 User Registration and Login (JWT authentication)
- 💾 SQLite Database (no external DB dependency)
- 🧾 CRUD Operations on Tasks
- 🧠 REST API integration using Axios
- 📱 Responsive UI built with TailwindCSS
- ☁️ Fully deployed using Render and Vercel

---

## 🛠️ Tech Stack

### **Frontend**
- ⚛️ Next.js
- 🎨 TailwindCSS
- 🌐 Axios

### **Backend**
- 🚀 Node.js
- 🧩 Express.js
- 💾 Sequelize ORM
- 🪶 SQLite3
- 🔒 bcryptjs, jsonwebtoken

### **Deployment**
- ☁️ Frontend: Vercel  
- 🌍 Backend: Render  

---

## 📂 Folder Structure

```

Frontend_Developer_Assignment_Template/
│
├── backend/
│   ├── src/
│   │   ├── server.js
│   │   ├── config/db.js
│   │   ├── models/
│   │   ├── routes/
│   │   └── controllers/
│   ├── data/
│   │   └── database.sqlite
│   ├── package.json
│   └── .env
│
└── frontend/
├── pages/
├── lib/
├── styles/
├── components/
├── package.json
└── .env.local

````

---

## ⚙️ Setup Instructions (Local)

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/Frontend_Developer_Assignment.git
cd Frontend_Developer_Assignment_Template
````

### 2️⃣ Setup Backend

```bash
cd backend
npm install
npx nodemon src/server.js
```

Backend runs at: [http://localhost:5000](http://localhost:5000)
SQLite DB file will be created automatically at `/data/database.sqlite`.

### 3️⃣ Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at: [http://localhost:3000](http://localhost:3000)

If testing locally, open `frontend/lib/api.js` and set:

```js
baseURL: "http://localhost:5000/api"
```

---

## 🔐 Environment Variables

### Backend `.env`

```env
PORT=5000
JWT_SECRET=mysecretkey
```

### Frontend `.env.local`

```env
NEXT_PUBLIC_API_URL=https://frontend-developer-assignment-2.onrender.com/api
```

---

## 🧩 API Endpoints

### **Authentication**

| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| POST   | `/api/auth/register` | Register new user   |
| POST   | `/api/auth/login`    | Login existing user |

### **Tasks**

| Method | Endpoint         | Description     |
| ------ | ---------------- | --------------- |
| GET    | `/api/tasks`     | Get all tasks   |
| POST   | `/api/tasks`     | Create new task |
| PUT    | `/api/tasks/:id` | Update a task   |
| DELETE | `/api/tasks/:id` | Delete a task   |

---

## 🖥️ Pages and Features

| Page      | Route        | Description                           |
| --------- | ------------ | ------------------------------------- |
| Home      | `/`          | Welcome / redirect                    |
| Register  | `/register`  | User registration page                |
| Login     | `/login`     | User login page                       |
| Dashboard | `/dashboard` | Protected task management page (CRUD) |

---

## 🎨 UI Features

* Modern and responsive design with TailwindCSS
* Form validation (client + server)
* Dynamic dashboard with API integration
* Toast notifications for success and errors
* Modular and scalable code structure

---

## 🧑‍💻 Developer

**Ravi Chalmar**
🎓 Final Year CSE Student, VTU CPGS Mysore
💼 Aspiring Frontend & Full Stack Developer
📧 [ravichalmar@gmail.com](mailto:ravichalmar@gmail.com)
🌐 [GitHub](https://github.com/Ravi8855) • [LinkedIn](https://www.linkedin.com/in/ravi-chalmar)

---

## 🏁 Conclusion

This project demonstrates:

* Full-Stack Development skills (Frontend + Backend + DB)
* RESTful API design and authentication
* Secure password handling with bcrypt
* Responsive UI design using TailwindCSS
* End-to-end deployment on cloud platforms

> Built and deployed as part of the Frontend Developer Internship assignment.
> Database uses SQLite for portability and easy cloud deployment.

---

✅ **Frontend:** [https://frontend-developer-assignment-six.vercel.app](https://frontend-developer-assignment-six.vercel.app)
✅ **Backend:** [https://frontend-developer-assignment-2.onrender.com](https://frontend-developer-assignment-2.onrender.com)

```

---

### 📋 Instructions to Add It:
1. In your GitHub repo root (same level as `/frontend` and `/backend`), create a file named:
```

README.md

````  
2. Paste the above content inside it.  
3. Commit and push:
```bash
git add README.md
git commit -m "Added professional README"
git push origin main
````

