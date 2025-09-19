# 💼 CareerForge – Job Portal Web Application

![License](https://img.shields.io/badge/license-MIT-blue.svg) 
![Java](https://img.shields.io/badge/Java-21-orange)
![Spring Boot](https://img.shields.io/badge/SpringBoot-3.4.6-brightgreen)
![React](https://img.shields.io/badge/React-18-blue)
![Docker](https://img.shields.io/badge/Docker-Enabled-informational)
![Netlify](https://img.shields.io/badge/Deployed-Netlify-blueviolet)

CareerForge is a **full-stack Job Portal Web Application** designed to connect **Job Seekers** with **Employers**.  
It provides **role-based access**, **secure authentication**, **job posting**, **job applications**, **email notifications**, and a **smooth modern UI**.  

Deployed with **Docker, Render, Railway, and Netlify** for a **production-ready experience**. 🚀  

---

## 🌐 Live Demo
- **Frontend (User Interface):** [CareerForge Portal](https://career-forge-portal.netlify.app)  
- **Backend API:** [CareerForge API](https://careerforge-a3ui.onrender.com)

---

## 📖 Table of Contents
- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Installation](#️-installation)
- [Usage](#️-usage)
- [Deployment](#-deployment)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

---

## 📌 About
CareerForge simplifies the recruitment process by allowing:

👔 **Employers** – Post jobs and manage applicants  
🙋 **Job Seekers** – Register, apply to jobs, and track/manage applications  
⚙️ **System** – Handles role-based access and automated notifications  

---

## ✨ Features
- 🔐 **Spring Security** – Role-based authentication (Employer & Job Seeker)  
- 📄 **Job Management** – Employers can post, edit, and remove job listings  
- 📝 **Application System** – Job seekers can apply, track, and manage applications  
- 📧 **Email Service** – Automated emails using JavaMailSender  
- 🗃️ **Database Integration** – MySQL with Hibernate (Spring Data JPA)  
- 🎨 **Modern UI** – Built with React + Tailwind + Framer Motion animations  
- 📦 **Containerized Deployment** – Backend packaged with Docker  
- ☁️ **Cloud Ready** – Backend (Render), Database (Railway), Frontend (Netlify)  

---

## 🛠 Tech Stack

### Frontend
- ⚛️ React + Vite  
- 🎨 Tailwind CSS  
- 🎬 Framer Motion  
- 📡 Axios  
- 🛣 React Router DOM  
- 📝 React Hook Form + Yup  

### Backend
- ☕ Java 21  
- 🌱 Spring Boot 3.4.6  
- 🔐 Spring Security  
- 🗃 Spring Data JPA (Hibernate)  
- ✉️ JavaMailSender  

### Database
- 🐬 MySQL (Railway)  

### DevOps & Deployment
- 🐳 Docker  
- 🔹 Render (Backend)  
- 🌍 Netlify (Frontend)  

### Version Control
- 🖇 Git & GitHub  

---

## 🏗 Architecture
```mermaid
flowchart LR
    A[Frontend: React + Vite + Tailwind] -->|Axios / REST API| B[Backend: Spring Boot + Security + JPA]
    B --> C[(MySQL Database - Railway)]
    B --> D[JavaMailSender - Email Service]
    B --> E[Dockerized Deployment - Render]
    A --> F[Netlify Hosting]
⚙️ Installation
Clone Repository
git clone https://github.com/your-username/careerforge.git
cd careerforge

Backend Setup
cd back-end
mvn clean install
mvn spring-boot:run

Frontend Setup
cd front-end
npm install
npm run dev

▶️ Usage

Backend runs on: http://localhost:8080

Frontend runs on: http://localhost:5173

Login as:

👨‍💼 Employer → Register → Post/manage jobs

🙋 Job Seeker → Register → Apply to jobs

🚀 Deployment

Frontend (React + Vite): Netlify

Backend (Spring Boot + Docker): Render

Database (MySQL): Railway

📸 Screenshots
Landing Page	Job Seeker Dashboard	Employer Dashboard

	
	
🤝 Contributing

Contributions are welcome! 🚀

Fork this repo

Create your feature branch

git checkout -b feature/your-feature


Commit your changes

git commit -m "Add feature"


Push to the branch

git push origin feature/your-feature


Open a Pull Request 🎉