# Sample Auth Web App

This is a full-stack authentication web application built using **ReactJS** for the frontend and **Node.js (Express)** for the backend. It allows users to register, log in, view their profile, and log out. 
Passwords are securely hashed and JWT is used for authentication. The app connects to a **PostgreSQL database hosted on Neon.

Frontend:
- ReactJS
- Vite
- TailwindCSS
- Axios
- Zustand
- Lucide
- React Router

Backend:
- Node.js
- Express.js
- JWT (jsonwebtoken)
- Bcrypt
- PostgreSQL (via Neon)
---

Setup environment variables:

Create a .env file in the root directory with the details I sent through forms.clickup:

# JWT Secret
TOKEN_KEY_SECRET= your_generated_secret_key
# Database connection string (Neon)
CONNECTION_STRING= your_neon_postgres_connection_url
# PORT
PORT = 5001

# Install backend dependencies
npm install

# Install frontend dependencies
npm install --prefix frontend

Start the backend:
  npm run dev

Start the Frontend:
  cd frontend
  npm run dev

Features Checklist (per requirements):
   Register with name, email, and password
   Login with email and password
   Validate credentials against the database
   Redirect to home page on successful login
   Display user details on the home page
   Logout functionality
   API built with Node.js
   Web app built with ReactJS
   PostgreSQL database (hosted on Neon)

External Libraries
All dependencies are listed in the root and frontend package.json files.

