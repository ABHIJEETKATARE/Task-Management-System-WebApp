# Task Management Application

A full-stack task management application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that helps teams organize and track their tasks efficiently.

## Features

- User authentication with role-based access (Admin/User)
- Task creation and management
- Multiple task views (Board View/List View)
- Task categorization (To Do, In Progress, Completed)
- Priority levels for tasks
- Task assignment capabilities
- Due date tracking
- Asset attachment support
- External link integration

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT

## Setup Instructions

1. Clone the repository
```bash
git clone <your-repo-url>
cd <repo-name>
```

2. Install dependencies for both client and server
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. Configure environment variables
- Create `.env` file in the server directory
- Add your MongoDB connection string and other configuration:
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret
```

4. Run the application
```bash
# Run server (from server directory)
npm start

# Run client (from client directory)
npm run dev
```

The client will run on port 3001 and the server on port 5000 by default.

## Project Structure

```
├── client/             # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
├── server/            # Node.js backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.