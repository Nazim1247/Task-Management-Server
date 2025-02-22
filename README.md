# Task Management - Backend

## Short Description
The **Task Management** backend is built using **Node.js**, **Express.js**, **MongoDB**, and **Firebase Authentication**. It provides a secure API for managing users, tasks, and real-time updates with **Socket.io**.

## Live Links
### https://task-management-ae398.web.app

## Dependencies
- **express** - Fast, minimalist web framework for Node.js
- **dotenv** - Loads environment variables from a `.env` file
- **firebase-admin** - Firebase Admin SDK for authentication
- **cors** - Middleware to handle Cross-Origin Resource Sharing
- **body-parser** - Middleware to parse incoming request bodies

## Installation Steps

### 1. Clone the repository
```bash
git clone https://github.com/your-username/task-management-backend.git
cd task-management-backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env` file in the root directory and add the following:
```env
PORT=5000
MONGODB_URI=your-mongodb-uri
FIREBASE_API_KEY=your-firebase-api-key
FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
FIREBASE_PROJECT_ID=your-firebase-project-id
FIREBASE_PRIVATE_KEY=your-firebase-private-key
```

### 4. Run the server
Start the server with:
```bash
npm start
```
For development with hot-reloading:
```bash
npm run dev
```
The server will run at `http://localhost:5000`.

## Technologies Used
### Backend
- **Node.js** – JavaScript runtime
- **Express.js** – Backend framework
- **MongoDB** – NoSQL database
- **Firebase Authentication** – Secure user authentication
- **dotenv** – Environment variable management

## API Endpoints
### Authentication
- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - Login an existing user

### Task Management
- **GET** `/api/tasks` - Get all tasks
- **POST** `/api/tasks` - Create a new task
- **PUT** `/api/tasks/:id` - Update a task
- **DELETE** `/api/tasks/:id` - Delete a task

## Contributing
1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
