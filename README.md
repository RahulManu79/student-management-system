
# **Student Management System API**

This is a comprehensive Student Management System API built with **Node.js**, **Express.js**, **TypeScript**, **MongoDB Atlas**, and **Swagger** for API documentation. It provides endpoints for both **Admin** and **Student** functionalities.

---

## **Features**

### **Admin Panel**

- Admin can log in using predefined credentials.
- Admin can add students with details like name, email, department, and password.
- Admin can assign tasks to students with a due date.

### **Student Interface**

- Students can log in using their email and password.
- Students can view tasks assigned to them.
- Students can update the status of their tasks (e.g., mark as completed).

---

## **Live Deployment**

- **Postman Documentation**: [View Postman Docs](https://documenter.getpostman.com/view/25097669/2sAYQdjVkL)
- **Swagger Documentation**: [View Swagger Docs](http://apistutentsportal-env-1.eba-j6ensyag.ap-south-1.elasticbeanstalk.com/api/docs/#/)

The application is deployed on **AWS Elastic Beanstalk**.

---

## **Technologies Used**

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for building APIs.
- **TypeScript**: Strongly typed superset of JavaScript.
- **MongoDB Atlas**: Cloud-based NoSQL database.
- **JWT**: JSON Web Tokens for secure authentication.
- **Swagger**: For API documentation.

---

## **Environment Variables**

The application requires the following environment variables, which should be defined in a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb+srv://rahulmanu7902:rahul2742@cluster0.oe3g5.mongodb.net/student-management
JWT_SECRET=student@2025
```

---

## **Installation and Usage**

### **Running Locally**

1. **Clone the Repository**

   ```bash
   git clone <repository_url>
   cd student-management-system
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the Application**
   - To run the application locally:

     ```bash
     npm run start
     ```

4. **Access API Documentation**
   - Swagger UI will be available at:

     ```
     http://localhost:5000/api/docs
     ```

---

## **Predefined Admin Credentials**

```json
{
  "email": "admin@admin.com",
  "password": "admin"
}
```

---

## **Endpoints Overview**

### **Admin**

- **POST /api/admin/login**: Admin login.
- **POST /api/admin/add-student**: Add a new student.
- **POST /api/admin/assign-task**: Assign a task to a student.

### **Student**

- **POST /api/student/login**: Student login.
- **GET /api/student/view-tasks**: View assigned tasks.
- **PUT /api/student/update-task-status**: Update task status (e.g., mark as completed).

---

## **Deployment**

The app is deployed on **AWS Elastic Beanstalk**. You can access the live Swagger documentation at:
[Swagger Docs](http://apistutentsportal-env-1.eba-j6ensyag.ap-south-1.elasticbeanstalk.com/api/docs/#/).

---

## **API Documentation**

- **Postman Docs**: [Postman Documentation](https://documenter.getpostman.com/view/25097669/2sAYQdjVkL)
- **Swagger UI**: [Swagger Documentation](http://apistutentsportal-env-1.eba-j6ensyag.ap-south-1.elasticbeanstalk.com/api/docs/#/)

---

## **Database**

The application uses **MongoDB Atlas** as the database. Ensure you have the `MONGO_URI` environment variable set correctly in the `.env` file.

---

## **License**

This project is licensed under the MIT License. Feel free to use and modify it as needed.
