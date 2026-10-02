# 💬 Voxa — Real-Time MERN Chat Application

**Voxa** is a full-stack real-time chat application built with the **MERN stack**. It supports secure user authentication, one-to-one messaging, real-time message delivery, online/offline presence, image sharing, profile pictures, and theme customization.

🔗 **Live Demo:** https://voxa-mern.onrender.com/login

---

## ✨ Features

* 🔐 **User Authentication**

  * User registration and login
  * Password hashing with `bcryptjs`
  * JWT-based authentication
  * HTTP-only cookie-based session handling
  * Protected routes

* 💬 **Real-Time One-to-One Messaging**

  * Send text messages instantly
  * Real-time message delivery using Socket.IO
  * Persistent messages stored in MongoDB
  * Automatic message timestamps

* 🖼️ **Image Messaging**

  * Send images as standalone messages
  * Send images with text
  * Image preview before sending
  * Images uploaded and hosted using Cloudinary

* 🟢 **Online / Offline Presence**

  * Real-time online user tracking with Socket.IO
  * Online/offline status indicators
  * Green presence indicator for online users
  * Option to filter the contacts list to show only online users

* 👤 **Profile Management**

  * User profile page
  * Profile picture upload
  * Profile pictures stored using Cloudinary

* 🎨 **Theme Customization**

  * Multiple DaisyUI themes
  * Theme selection persisted using browser local storage
  * Theme-aware UI components

* 📱 **Responsive Interface**

  * Responsive chat layout
  * Mobile-friendly navigation
  * Responsive contact sidebar
  * Adaptive message interface

* ⚡ **Modern Frontend State Management**

  * Zustand for authentication and chat state
  * Axios for API communication
  * React Router for client-side routing

---

## 🛠️ Tech Stack

### Frontend

| Technology       | Purpose                  |
| ---------------- | ------------------------ |
| React            | UI development           |
| Vite             | Frontend tooling         |
| Tailwind CSS     | Styling                  |
| DaisyUI          | UI components and themes |
| Zustand          | State management         |
| React Router     | Client-side routing      |
| Axios            | HTTP requests            |
| Socket.IO Client | Real-time communication  |
| Lucide React     | Icons                    |
| React Hot Toast  | Notifications            |

### Backend

| Technology    | Purpose                 |
| ------------- | ----------------------- |
| Node.js       | Runtime environment     |
| Express.js    | REST API                |
| MongoDB       | Database                |
| Mongoose      | MongoDB ODM             |
| Socket.IO     | Real-time communication |
| JWT           | Authentication          |
| bcryptjs      | Password hashing        |
| Cookie Parser | Cookie handling         |
| Cloudinary    | Image storage           |
| CORS          | Cross-origin requests   |

---

## 🏗️ Architecture

Voxa follows a client-server architecture:

```text
                    ┌─────────────────────┐
                    │       React         │
                    │      Frontend       │
                    │                     │
                    │ React + Zustand     │
                    │ Tailwind + DaisyUI  │
                    └──────────┬──────────┘
                               │
                     HTTP / REST API
                               │
                               ▼
                    ┌─────────────────────┐
                    │      Express        │
                    │       Backend       │
                    │                     │
                    │ Auth & Message API  │
                    └──────┬───────┬──────┘
                           │       │
                 ┌─────────┘       └─────────┐
                 ▼                           ▼
        ┌─────────────────┐          ┌─────────────────┐
        │    MongoDB      │          │   Cloudinary    │
        │                 │          │                 │
        │ Users & Messages│          │ Profile & Chat  │
        └─────────────────┘          │     Images      │
                                     └─────────────────┘

                    ┌─────────────────────┐
                    │     Socket.IO       │
                    │                     │
                    │ Real-time messages  │
                    │ Online presence     │
                    └─────────────────────┘
```

---

## 📁 Project Structure

```text
voxa-mern/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── auth.controller.js
│   │   │   └── message.controller.js
│   │   │
│   │   ├── middleware/
│   │   │   └── auth.middleware.js
│   │   │
│   │   ├── models/
│   │   │   ├── user.model.js
│   │   │   └── message.model.js
│   │   │
│   │   ├── routes/
│   │   │   ├── auth.route.js
│   │   │   └── message.route.js
│   │   │
│   │   ├── lib/
│   │   │   ├── cloudinary.js
│   │   │   ├── db.js
│   │   │   └── socket.js
│   │   │
│   │   ├── utils/
│   │   │   └── jwt.js
│   │   │
│   │   └── index.js
│   │
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── lib/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

* [Node.js](https://nodejs.org/)
* MongoDB / MongoDB Atlas account
* Cloudinary account

### 1. Clone the repository

```bash
git clone https://github.com/shivams-code/voxa-mern.git

cd voxa-mern
```

### 2. Install dependencies

The root project provides scripts to install dependencies for both the frontend and backend.

```bash
npm run build
```

Alternatively, install them separately:

```bash
cd backend
npm install

cd ../frontend
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file inside the `backend` directory.

```env
PORT=5001
MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

NODE_ENV=development
```

> Never commit your `.env` file or expose your secrets publicly.

---

## 💻 Running Locally

### Start the backend

```bash
cd backend
npm run dev
```

### Start the frontend

In another terminal:

```bash
cd frontend
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

The backend runs on the configured port, typically:

```text
http://localhost:5001
```

---

## 🔌 API Routes

### Authentication

| Method | Endpoint                   | Description              |
| ------ | -------------------------- | ------------------------ |
| POST   | `/api/auth/signup`         | Create a new account     |
| POST   | `/api/auth/login`          | Log in                   |
| POST   | `/api/auth/logout`         | Log out                  |
| GET    | `/api/auth/check`          | Check authenticated user |
| PUT    | `/api/auth/update-profile` | Update profile picture   |

### Messaging

| Method | Endpoint                 | Description                     |
| ------ | ------------------------ | ------------------------------- |
| GET    | `/api/messages/users`    | Get users for the contacts list |
| GET    | `/api/messages/:id`      | Get conversation messages       |
| POST   | `/api/messages/send/:id` | Send a message                  |

---

## ⚡ Real-Time Communication

Voxa uses **Socket.IO** to provide real-time functionality.

When a user connects:

```text
User
  ↓
Socket.IO connection
  ↓
User ID mapped to socket ID
  ↓
Online users updated
```

When a message is sent:

```text
Sender
  ↓
REST API
  ↓
Message saved to MongoDB
  ↓
Receiver's Socket.IO connection
  ↓
Real-time message event
  ↓
Receiver sees the message instantly
```

Socket.IO is also used to maintain the online/offline presence of users.

---

## 🖼️ Image Handling

Voxa uses **Cloudinary** for image storage.

Images can be used for:

* Profile pictures
* Standalone chat messages
* Image + text messages

The frontend creates an image preview before uploading, while the backend uploads the image to Cloudinary and stores the resulting URL with the message/user data.

---

## 🎨 Theme System

Voxa uses **DaisyUI** with Tailwind CSS for its theme system.

The selected theme is stored in browser local storage, allowing the user's theme preference to persist between sessions.

The application supports multiple DaisyUI themes including:

```text
dark
light
cupcake
bumblebee
emerald
corporate
synthwave
retro
cyberpunk
valentine
halloween
forest
aqua
lofi
pastel
fantasy
black
luxury
dracula
autumn
business
lemonade
night
coffee
winter
dim
nord
sunset
```

---

## 🌐 Deployment

Voxa is deployed using **Render**.

The production build:

1. Installs backend dependencies
2. Installs frontend dependencies
3. Builds the React application
4. Serves the generated frontend through the Express backend

### Production URL

**https://voxa-mern.onrender.com/login**

---

## 🔮 Future Improvements

Some potential improvements for future versions:

* 🔔 Browser / push notifications
* ✍️ Typing indicators
* ✓ Read receipts
* 👥 Group conversations
* 🗑️ Delete messages
* ✏️ Edit messages
* 🔎 Message search
* 📎 Additional file types
* 😀 Emoji picker
* 🎤 Voice messages
* 📞 Audio/video calling
* 🔒 Additional security and validation improvements

---

## 📚 What I Learned

Building Voxa helped me gain practical experience with:

* Building a full-stack MERN application
* Designing REST APIs with Express
* Authentication using JWT and HTTP-only cookies
* Password hashing with bcrypt
* MongoDB data modeling with Mongoose
* Real-time communication using Socket.IO
* Managing application state with Zustand
* Uploading and serving images through Cloudinary
* Building responsive interfaces with Tailwind CSS
* Creating theme systems using DaisyUI
* Deploying a full-stack application to Render
* Connecting frontend and backend in a production environment

---

## 👨‍💻 Author

**Shivam Sharma**

GitHub: [@shivams-code](https://github.com/shivams-code)

---

## ⭐ Show Your Support

If you found Voxa interesting, consider giving the repository a ⭐ on GitHub!

---

### 📌 Project Status

Voxa is an actively developed personal project. More features and improvements may be added over time.
