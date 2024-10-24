import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
dotenv.config();

// Import the routes
import routes from './routes/index.js';

const app = express();

const PORT = process.env.PORT || 3001;

// Serve static files from client dist folder
app.use(express.static(path.join(process.cwd(), 'client', 'dist')));

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect all routes
app.use(routes);

// Start the server on the port
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));