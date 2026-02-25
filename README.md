# TinyTrek 🚀

**TinyTrek** is a modern URL shortener built with the MERN stack.  
It allows users to create short links, manage them through a dashboard, and track click activity — all inside a clean, product-style interface.

Live like a real SaaS. Built with a product mindset.

---

## ✨ Features

- 🔗 Create short URLs instantly
- 🧩 Custom slug support (for authenticated users)
- 📊 Track click counts
- 📁 User dashboard to manage links
- 📋 One-click copy to clipboard
- 🔐 JWT Authentication (Login / Signup)
- ⚡ Real-time updates using React Query
- 🎨 Modern dark UI (Glassmorphism + Ambient glow)
- 📱 Responsive design

---

## 🛠 Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- TanStack Router
- TanStack React Query
- Redux Toolkit
- Axios
- Framer Motion

### Backend
- Node.js
- Express
- MongoDB (Mongoose)
- JWT Authentication
- bcrypt

---

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── heroSection/
│   │   │   ├── Blinker.jsx
│   │   │   ├── Features.jsx
│   │   │   ├── FeaturesStats.jsx
│   │   │   ├── Text.jsx
│   │   │   └── UrlForm.jsx
│   │   └── index.css
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   └── index.css
│   ├── router/
│   │   ├── index.js
│   │   └── routes/
│   │       ├── index.js
│   │       ├── homeRoute.js
│   │       └── loginRoute.js
│   ├── store/
│   │   ├── index.js
│   │   └── slice/
│   │       └── index.js
│   ├── App.jsx
│   ├── index.css
│   └── rootLayout.jsx
├── vite.config.js
└── package.json
```
```
backend/
├── src/
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── urlRoutes.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── urlController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── config/
│   │   └── db.js
│   ├── server.js
│   └── package.json
├── package.json
└── README.md
```


---

## 🧠 Learning Goals

This project focuses on:

- Building a product-level MERN application
- Authentication & protected routes
- API state management with React Query
- Clean UI/UX design
- Production-ready architecture

---

## 📌 Future Improvements

- Link analytics (charts)
- Delete / edit links
- Pagination
- QR code generation
- Rate limiting
- Access & refresh tokens
- Team / workspace support

---

## 🙌 Author

Built by **Hsr Raza**

If you like this project or have feedback, feel free to connect or contribute!

---

## ⭐ Why TinyTrek?

Not just a project.  
Built with a **product mindset** — focusing on UX, architecture, and real-world patterns.