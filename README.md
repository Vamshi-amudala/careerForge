<div align="center">

# 🚀 CareerForge

### *Where Talent Meets Opportunity*

[![Live Demo](https://img.shields.io/badge/🌐_Live-Demo-00C7B7?style=for-the-badge)](https://career-forge-portal.netlify.app)
[![API](https://img.shields.io/badge/📡_Backend-API-FF6B6B?style=for-the-badge)](https://careerforge-a3ui.onrender.com)
[![License](https://img.shields.io/badge/📄_License-MIT-blue?style=for-the-badge)](LICENSE)

<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=00C7B7&center=true&vCenter=true&width=435&lines=Full-Stack+Job+Portal;Connecting+Dreams+to+Reality;Built+with+Modern+Tech+Stack" alt="Typing SVG" />

</div>

---

## 🎯 Vision

**CareerForge** is not just another job portal—it's a comprehensive ecosystem that revolutionizes the recruitment experience. Built with cutting-edge technologies, it seamlessly bridges the gap between ambitious job seekers and forward-thinking employers.

<div align="center">

### ⚡ Quick Stats

| 🎨 **Modern UI** | 🔐 **Secure Auth** | 📧 **Auto Notifications** | 🐳 **Containerized** |
|:---:|:---:|:---:|:---:|
| React + Tailwind | Spring Security | Email Integration | Docker Ready |

</div>

---

## ✨ What Makes CareerForge Special?

<table>
<tr>
<td width="50%">

### 👔 For Employers
- **Smart Job Management** - Create, edit, and manage postings effortlessly
- **Applicant Tracking** - Streamlined candidate management
- **Real-time Notifications** - Stay updated on applications
- **Intuitive Dashboard** - All tools at your fingertips

</td>
<td width="50%">

### 🎯 For Job Seekers
- **Personalized Experience** - Tailored job recommendations
- **One-Click Apply** - Simplified application process
- **Application Tracking** - Monitor your journey
- **Profile Management** - Showcase your skills

</td>
</tr>
</table>

---

## 🛠️ Tech Arsenal

<div align="center">

### Frontend Powerhouse
![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

### Backend Fortress
![Java](https://img.shields.io/badge/Java_21-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot_3.4-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![Spring Security](https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=spring-security&logoColor=white)
![Hibernate](https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=hibernate&logoColor=white)

### Infrastructure & DevOps
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

</div>

---

## 🏗️ System Architecture

```mermaid
graph TB
    subgraph "Frontend Layer"
        A[React + Vite]
        B[Tailwind CSS]
        C[Framer Motion]
    end
    
    subgraph "API Gateway"
        D[Spring Boot REST API]
    end
    
    subgraph "Security Layer"
        E[Spring Security]
        F[JWT Authentication]
    end
    
    subgraph "Business Logic"
        G[Job Management Service]
        H[Application Service]
        I[Email Service]
    end
    
    subgraph "Data Layer"
        J[(MySQL - Railway)]
    end
    
    A --> D
    B --> D
    C --> D
    D --> E
    E --> F
    F --> G
    F --> H
    F --> I
    G --> J
    H --> J
    I -.->|SMTP| K[Email Server]
    
    style A fill:#61DAFB
    style D fill:#6DB33F
    style E fill:#FF6B6B
    style J fill:#4479A1
```

---

## 🚀 Quick Start

### Prerequisites
```bash
☕ Java 21+
📦 Node.js 18+
🐳 Docker (optional)
🗃️ MySQL
```

### 🔧 Installation

1️⃣ **Clone the Repository**
```bash
git clone https://github.com/vamshi-amudala/careerforge.git
cd careerforge
```

2️⃣ **Backend Setup**
```bash
cd back-end
mvn clean install
mvn spring-boot:run
```
> Backend will run on `http://localhost:8080` 🎯

3️⃣ **Frontend Setup**
```bash
cd front-end
npm install
npm run dev
```
> Frontend will run on `http://localhost:5173` ✨

### 🐳 Docker Deployment
```bash
docker build -t careerforge-backend ./back-end
docker run -p 8080:8080 careerforge-backend
```

---

## 📸 Glimpse into CareerForge

<div align="center">

### 🎨 Landing Experience
<img src="image-1.png" width="800" alt="Landing Page"/>

<table>
<tr>
<td width="50%">
<h3 align="center">🎯 Job Seeker Portal</h3>
<img src="job-seeker.png" alt="Job Seeker Dashboard"/>
</td>
<td width="50%">
<h3 align="center">👔 Employer Hub</h3>
<img src="image.png" alt="Employer Dashboard"/>
</td>
</tr>
</table>

</div>

---

## 🌟 Key Features Deep Dive

<details>
<summary>🔐 <b>Authentication & Security</b></summary>

- Role-based access control (RBAC)
- JWT token authentication
- Password encryption with BCrypt
- Session management
- CSRF protection
</details>

<details>
<summary>📋 <b>Job Management System</b></summary>

- CRUD operations for job postings
- Advanced search and filtering
- Category-based organization
- Job expiration tracking
- Application status management
</details>

<details>
<summary>📧 <b>Notification System</b></summary>

- Email verification on registration
- Application confirmation emails
- Status update notifications
- Scheduled email reminders
- Template-based email system
</details>

<details>
<summary>🎨 <b>UI/UX Excellence</b></summary>

- Responsive design for all devices
- Smooth animations with Framer Motion
- Dark/Light mode support
- Accessible components
- Loading states and error handling
</details>

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

```bash
# 1. Fork the repository
# 2. Create your feature branch
git checkout -b feature/AmazingFeature

# 3. Commit your changes
git commit -m '✨ Add some AmazingFeature'

# 4. Push to the branch
git push origin feature/AmazingFeature

# 5. Open a Pull Request
```

<div align="center">

### 💡 Contribution Ideas
🐛 **Bug Fixes** | ✨ **New Features** | 📝 **Documentation** | 🎨 **UI Improvements**

</div>

---

## 📊 Project Stats

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/vamshi-amudala/careerforge?style=social)
![GitHub forks](https://img.shields.io/github/forks/vamshi-amudala/careerforge?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/vamshi-amudala/careerforge?style=social)

</div>

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License - Feel free to use this project for learning and commercial purposes!
```

---

## 👨‍💻 Author

<div align="center">

### Vamshi Amudala

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/vamshi-amudala)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/vamshi-amudala)

**Full-Stack Developer | Java Enthusiast | Open Source Contributor**

</div>

---

## 🙏 Acknowledgments

<div align="center">

Special thanks to:
- 💚 **Spring Boot Community** for the amazing framework
- ⚛️ **React Team** for the powerful UI library
- 🎨 **Tailwind Labs** for the utility-first CSS framework
- 🌟 **All Contributors** who helped make this project better

</div>

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

**Made with ❤️ and lots of ☕**

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" />

*CareerForge - Forging Careers, Building Futures* 🚀

</div>
