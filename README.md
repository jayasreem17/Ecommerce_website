# Finance Data Processing and Access Control Backend

## 📌 Overview
This project is a backend system for a finance dashboard that manages users, financial records, and summary analytics with role-based access control.

The backend is built using **Node.js** and **Express** and demonstrates API design, data handling, and access restriction based on user roles.

---

## 🚀 Features

### 1. User Management
- Create users
- Assign roles (admin, analyst, viewer)
- Manage user data

### 2. Financial Records Management
- Create records (income/expense)
- View records
- Update records
- Delete records
- Filter records by:
  - Type
  - Category

### 3. Dashboard Summary
- Total Income
- Total Expense
- Net Balance
- Category-wise totals

### 4. Role-Based Access Control
- **Admin**
  - Full access (create, update, delete)
- **Analyst**
  - View records and summary
- **Viewer**
  - View-only access

### 5. Validation & Error Handling
- Required fields validation
- Proper error responses
- HTTP status codes

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- In-memory data storage (for simplicity)

---

## 📁 Project Structure


MyFinance-jayasree/
│
├── app.js
└── api/
├── users.js
├── records.js
├── recordsData.js
└── summary.js


---

## ▶️ How to Run

1. Install dependencies:

npm install


2. Start server:

node app.js


3. Server runs on:

http://localhost:5000


---

## 📌 API Endpoints

### 🔹 Users

**Create User**

POST /users


**Get Users**

GET /users


---

### 🔹 Records

**Create Record (Admin only)**

POST /records
Headers: role = admin


**Get Records (All roles)**

GET /records
Headers: role = admin / analyst / viewer


**Filter Records**

GET /records?type=income
GET /records?category=salary


**Update Record (Admin only)**

PUT /records/:id


**Delete Record (Admin only)**

DELETE /records/:id


---

### 🔹 Summary

**Get Dashboard Summary**

GET /summary


**Response**

{
"totalIncome": 1000,
"totalExpense": 400,
"balance": 600,
"categoryTotals": {
"salary": 1000
}
}


---

## 🔐 Access Control

Role-based access is implemented using middleware.

- Admin → Full access  
- Analyst → Read access  
- Viewer → Limited read access  

---

## ⚠️ Assumptions

- Authentication is simplified using request headers
- Data is stored in memory (no database)
- Single-user environment for testing

---

## ✨ Future Improvements

- Add database (MongoDB / MySQL)
- Implement JWT authentication
- Add pagination
- Add search functionality
- Deploy API

---

## 📌 Conclusion

This project demonstrates backend development skills including:
- API design
- Data handling
- Business logic implementation
- Role-based access control

---

## 👤 Author
**Jayasree M**