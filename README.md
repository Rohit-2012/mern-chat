# MERN-Chat

## Description
A real-time chat application built using the MERN stack and Socket.io. This application allows users to login, signup, see the list of registered users, check online status, and chat with other users in real-time.

## Features
- **Protected Routing**: Ensures that only authenticated users can access certain routes.
- **Login**: Users can log in to their accounts.
- **SignUp**: New users can create an account.
- **Real-Time Chat Updates**: Chat messages are updated in real-time.
- **New Chat Notification Sound**: Users receive a sound notification for new messages.
- **Logout**: Users can log out of their accounts.
- **See Online Users**: Users can see who is currently online.
- **Search Functionality**: Allows users to search for other registered users.

## Tech Stack Used
- **Frontend:**
  - React
  - React DOM
  - React Router DOM
  - Zustand
  - React Hot Toast
  - Vite (for development and build)
  - Tailwind CSS
  - DaisyUI
  - Autoprefixer
  - ESLint
  
- **Backend:**
  - Node.js
  - Express
  - MongoDB
  - Mongoose
  - Socket.io
  - BcryptJS
  - JSON Web Token (JWT)
  - Cookie-parser
  - Dotenv
  
- **Dev Tools:**
  - Nodemon (for development server)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Rohit-2012/mern-chat.git
   
2. Frontend setup
   ```bash
    cd frontend
    npm install
    npm run dev

3. Backend setup in another terminal
   ```bash
    npm install
    npm run server
4. To run the production build
   ```bash
   npm run build
   npm start

## Environment variables setup
1. For development
   ```bash
   NODE_ENV=development
   PORT=<port>
   MONGO_DB_URI=<your mongoDB URI>
   JWT_SECRET=<your secret for JWT>
2. For development
   ```bash
   NODE_ENV=production
   PORT=<port>
   MONGO_DB_URI=<your mongoDB URI>
   JWT_SECRET=<your secret for JWT>
   

**Thank you for checking out the MERN-Chat application! If you encounter any issues or have suggestions for improvements, please open an issue on the GitHub repository. Feel free to contribute or contact me at rohit.kirti1219@gmail.com. Happy coding!**
