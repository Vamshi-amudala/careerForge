💼 CareerForge – Job Portal Web Application

CareerForge is a full-stack Job Portal Web Application designed to connect job seekers with employers.
It provides role-based access, secure authentication, job posting, job applications, email notifications, and a smooth modern UI.

Deployed with Docker, Render, Railway, and Netlify for a production-ready experience. 🚀

🌐 Live Demo

Frontend (User Interface): career-forge-portal.netlify.app

Backend API: careerforge-a3ui.onrender.com

📖 Table of Contents

About

Features

Tech Stack

Architecture

Installation

Usage

Deployment

Screenshots

Contributing

License

📌 About

CareerForge simplifies the recruitment process by allowing:

Employers to post jobs and manage applicants.

Job Seekers to register, apply to jobs, and track/manage applications.

System to handle role-based access and notifications automatically.

✨ Features

🔐 Spring Security – Role-based authentication (Employer & Job Seeker)

📄 Job Management – Employers can post, edit, and remove job listings

📝 Application System – Job seekers can apply, track, and manage applications

📧 Email Service – Automated emails using JavaMailSender

🗃️ Database Integration – MySQL with Hibernate (Spring Data JPA)

🎨 Modern UI – Built with React + Tailwind + Framer Motion animations

📦 Containerized Deployment – Backend packaged with Docker for easy deployment

☁️ Cloud-Ready –

Backend (Dockerized) deployed on Render

MySQL database hosted on Railway

Frontend hosted on Netlify

🔗 REST APIs used for communication between frontend and backend

🛠 Tech Stack

Frontend:

React + Vite

Tailwind CSS

Framer Motion

Axios

React Router DOM

React Hook Form + Yup

Backend:

Java 21

Spring Boot 3.4.6

Spring Security

Spring Data JPA (Hibernate)

JavaMailSender

Database:

MySQL (Railway)

DevOps & Deployment:

Docker

Render (Backend)

Netlify (Frontend)

Version Control:

Git & GitHub

🏗 Architecture
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

Job Seeker → Register → Apply to jobs

Employer → Register → Post/manage jobs

🚀 Deployment

Frontend (React + Vite) → Netlify

Backend (Spring Boot + Docker) → Render

Database (MySQL) → Railway

📸 Screenshots
![Landing page](image-1.png)
![Job-Seeker Dashboard](job-seeker.png)
![Employer Dashboard](image.png)

🤝 Contributing

Contributions are welcome!

Fork this repo

Create your feature branch (git checkout -b feature/your-feature)

Commit changes (git commit -m 'Add feature')

Push to branch (git push origin feature/your-feature)

Open a Pull Request

📜 License

This project is licensed under the MIT License.