
ShopEZ – E-Commerce Platform (MERN Stack)
📌 Project Overview

ShopEZ is a full-stack e-commerce web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).

The platform allows users to browse products, add items to cart, and place orders, while administrators can manage products and categories.

This project demonstrates how a modern e-commerce system can be built using full-stack JavaScript technologies.

🎯 Objectives

Build a complete MERN stack e-commerce application.

Provide users with a smooth online shopping experience.

Implement backend APIs for managing products, orders, and users.

Store and manage application data using MongoDB.

Develop an interactive frontend using React.js.

🗂 Project Structure
Skillwallet
│
├── client
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   └── App.jsx
│   ├── index.html
│   └── package.json
│
├── backend
│   ├── config
│   │   └── db.js
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   ├── server.js
│   └── package.json
│
├── docs
├── README.md
└── user flow
📊 Features

The ShopEZ platform includes the following features:

User Features

Browse product catalog

View product details

Add items to cart

Place orders

View order details

Admin Features

Manage products

Manage categories

View orders

Manage inventory

⚙️ Technologies Used
Frontend

React.js

HTML

CSS

JavaScript

Vite

Backend

Node.js

Express.js

MongoDB

Mongoose

Tools

Git

GitHub

MongoDB Atlas

VS Code

🧠 Backend Architecture

The backend follows a RESTful API structure.

Main components:

Routes → Controllers → Models → Database

Example API flow:

Client Request
      ↓
Express Route
      ↓
Controller Logic
      ↓
MongoDB Model
      ↓
Database Operation
      ↓
Response Sent to Client
🔄 Application Workflow
User visits website
      ↓
Browse products
      ↓
View product details
      ↓
Add item to cart
      ↓
Place order
      ↓
Order stored in MongoDB
      ↓
Admin manages orders/products
🚀 Running the Project Locally
1️⃣ Clone the repository
git clone https://github.com/Singh28priyanka/Skillwallet.git
2️⃣ Install Backend Dependencies
cd backend
npm install
3️⃣ Configure Environment Variables

Create a .env file in the backend folder.

MONGO_URI=your_mongodb_connection_string
PORT=5000
4️⃣ Run the Backend Server
node server.js

Server runs at:

http://localhost:5000
5️⃣ Run the Frontend
cd client
npm install
npm run dev

Frontend runs at:

http://localhost:5173
📈 Database

The project uses MongoDB Atlas as the cloud database.

Main collections:

Users

Products

Orders

Cart

Admin

👥 Team Members

Priyanka Kumari – Team Lead

Ravi Gupta

Raja Kushwaha

Mohd Saad Areeb Khan

📌 Future Improvements

Add secure authentication with JWT

Integrate online payment gateway

Implement product reviews and ratings

Add advanced search and filters

Deploy the application on cloud platforms

📜 License

This project is developed for educational purposes as part of the SmartBridge SkillWallet program.

⭐ Conclusion

ShopEZ demonstrates how a complete MERN stack e-commerce platform can be built using modern web technologies. The system provides essential e-commerce features while showcasing full-stack development concepts such as API development, database integration, and frontend-backend interaction.
