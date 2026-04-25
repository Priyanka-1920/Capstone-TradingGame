# TradingGame
# 🚀 Sprint 1: Project Setup and Application Foundation

---

## 🎯 Objective

To set up the initial project structure, develop the base application, and prepare the environment for containerization and deployment in later sprints.

---

## 🛠️ Tools & Technologies

* Node.js
* Express.js
* Git & GitHub
* Docker (basic setup)
* VS Code / Local Development Environment

---

## 🏗️ Architecture Overview

Client → Server (Node.js) → API Endpoints

---

## 🚀 Implementation Steps

### 1. Project Initialization

* Created project repository on GitHub
* Cloned repository locally:

```bash id="s1cmd1"
git clone https://github.com/Priyanka-1920/Capstone-TradingGame.git
```

---

### 2. Backend Setup (Node.js)

* Initialized Node.js project:

```bash id="s1cmd2"
npm init -y
```

* Installed dependencies:

```bash id="s1cmd3"
npm install express
```

---

### 3. Basic Server Implementation

```javascript id="s1code1"
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Trading App is running');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

---

### 4. Project Structure

```text id="s1structure"
Capstone-TradingGame/
├── Client/
├── Server/
├── package.json
└── README.md
```

---

### 5. Version Control

* Initialized Git repository
* Created initial commits and pushed to GitHub

```bash id="s1cmd4"
git add .
git commit -m "Initial project setup"
git push origin main
```

---

### 6. Basic Docker Setup (Optional)

* Created simple Dockerfile for backend

```dockerfile id="s1docker"
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "index.js"]
```

---

## 📊 Achievements

* Established project structure
* Developed basic Node.js application
* Configured GitHub repository
* Prepared application for containerization

---

## 📸 Screenshots

(Add images in `docs/` folder)

* Project Structure
* Running Application (localhost)
* GitHub Repository

---

## 🧠 Key Learnings

* Node.js application setup and routing
* Importance of version control (Git)
* Basic Docker concepts
* Structuring scalable projects

---

## 🚀 Outcome

* Functional backend application created
* Repository initialized and structured
* Foundation prepared for infrastructure provisioning (Sprint 2)

---

## 🔮 Future Enhancements

* Add frontend integration
* Implement API routes and business logic
* Add database integration

---

## 📌 Conclusion

Sprint 1 focused on building the foundation of the application, setting up the development environment, and preparing the project for further DevOps practices in subsequent sprints.
