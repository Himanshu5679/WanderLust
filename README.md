# 🌍 Wanderlust

A full-stack Airbnb-inspired web application where users can explore, create, edit, and review travel listings. Wanderlust provides a modern and responsive interface for discovering accommodations while offering secure user authentication and interactive maps.

![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![Bootstrap](https://img.shields.io/badge/UI-Bootstrap%205-purple)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## 📌 Features

### 👤 User Authentication
- User Registration
- User Login & Logout
- Secure authentication using Passport.js
- Session-based authentication

### 🏠 Listings
- Create new listings
- View all listings
- Edit existing listings
- Delete listings
- Upload listing images using Cloudinary
- Interactive location map using Mapbox

### ⭐ Reviews
- Add reviews and ratings
- Delete own reviews
- Star rating system

### 🔒 Authorization
- Only logged-in users can create listings
- Only listing owners can edit/delete listings
- Only review authors can delete their reviews

### 🎨 Modern UI
- Responsive Airbnb-inspired design
- Search bar
- User avatar
- Dropdown menu
- Category filters
- Responsive cards
- Responsive footer

---

# 🛠 Tech Stack

## Frontend
- HTML5
- CSS3
- Bootstrap 5
- JavaScript
- EJS

## Backend
- Node.js
- Express.js

## Database
- MongoDB
- Mongoose

## Authentication
- Passport.js
- Passport Local
- Passport Local Mongoose

## Image Storage
- Cloudinary
- Multer

## Maps
- Mapbox API

---

# 📂 Project Structure

```
wanderlust/
│
├── controllers/
├── models/
├── routes/
├── middleware.js
├── public/
│   ├── css/
│   ├── js/
│   └── images/
│
├── views/
│   ├── includes/
│   ├── layouts/
│   ├── listings/
│   ├── reviews/
│   └── users/
│
├── utils/
├── app.js
├── cloudConfig.js
├── schema.js
├── package.json
└── README.md
```

---

# ⚙ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/wanderlust.git
```

Go inside project

```bash
cd wanderlust
```

Install dependencies

```bash
npm install
```

Run project

```bash
node app.js
```

or

```bash
nodemon app.js
```

Open browser

```
http://localhost:8080
```

---

# 🔑 Environment Variables

Create a `.env` file in the root directory.

```env
ATLASDB_URL=your_mongodb_connection

SECRET=your_secret_key

CLOUD_NAME=your_cloudinary_name

CLOUD_API_KEY=your_cloudinary_key

CLOUD_API_SECRET=your_cloudinary_secret

MAP_TOKEN=your_mapbox_token
```

---

# 📸 Screenshots

## Home Page

Add screenshot here

```
public/images/home.png
```

## Listing Details

Add screenshot here

```
public/images/show.png
```

## Login

Add screenshot here

```
public/images/login.png
```

---

# 🚀 Future Improvements

- ❤️ Wishlist
- 💬 Chat between Host & Guest
- 📅 Booking System
- 💳 Online Payments
- 🔍 Advanced Search
- 📍 Nearby Listings
- 📱 Progressive Web App (PWA)
- 🌙 Dark Mode
- 📧 Email Verification
- 🔔 Notifications

---

# 👨‍💻 Author

**Himanshu Singh**

B.Tech Computer Science Engineering

Integral University, Lucknow

GitHub:
https://github.com/singh5679

LinkedIn:
(Add Your LinkedIn URL)

---

# 🙏 Acknowledgements

- Airbnb (UI Inspiration)
- Bootstrap
- Mapbox
- Cloudinary
- MongoDB Atlas
- Express.js
- Passport.js

---

# 📜 License

This project is licensed under the MIT License.

```
MIT License

Copyright (c) 2026 Himanshu Singh

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...
```

---

## ⭐ If you like this project, don't forget to star the repository!