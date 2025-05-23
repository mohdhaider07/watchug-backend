# Movie App Backend

This is the backend for the Movie App project. It provides RESTful APIs for user authentication and managing the user's "Loved Movies" collection.

## Features

- User registration and login (with JWT authentication)
- Store and retrieve user's loved movies
- Connects to MongoDB for data storage

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT for authentication

## Setup Instructions

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd unit-project/backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add environment variables

Create a `.env` file in the `backend` folder with the following content:

```
PORT=5000
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-secret-key>
TMDB_API_KEY=<your-tmdb-api-key>
```

- Replace `<your-mongodb-connection-string>` with your MongoDB URI (local or Atlas).
- Replace `<your-secret-key>` with a random string for JWT signing.
- Replace `<your-tmdb-api-key>` with your TMDB API key.

### 4. Start the backend

```bash
npm start
```

The backend will run on `http://localhost:5000`.
