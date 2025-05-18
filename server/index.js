import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import path from 'path';
import { fileURLToPath } from 'url';

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Middleware
app.use(express.json());

// Serve static files from the React app in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
}

// MongoDB connection (mock for now)
// In a real application, you would connect to an actual MongoDB instance
console.log('MongoDB would be connected here in a real app');

// Define routes

// Auth routes
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  // In a real app, you would validate credentials against the database
  // This is a mock implementation for demonstration
  if (email === 'student@example.com' && password === 'password') {
    const token = jwt.sign(
      { id: '1', name: 'John Student', email, role: 'student' },
      'your_jwt_secret',
      { expiresIn: '7d' }
    );
    
    return res.json({
      token,
      user: { _id: '1', name: 'John Student', email, role: 'student' }
    });
  } else if (email === 'instructor@example.com' && password === 'password') {
    const token = jwt.sign(
      { id: '2', name: 'Sarah Instructor', email, role: 'instructor' },
      'your_jwt_secret',
      { expiresIn: '7d' }
    );
    
    return res.json({
      token,
      user: { _id: '2', name: 'Sarah Instructor', email, role: 'instructor' }
    });
  } else if (email === 'admin@example.com' && password === 'password') {
    const token = jwt.sign(
      { id: '3', name: 'Admin User', email, role: 'admin' },
      'your_jwt_secret',
      { expiresIn: '7d' }
    );
    
    return res.json({
      token,
      user: { _id: '3', name: 'Admin User', email, role: 'admin' }
    });
  }
  
  return res.status(401).json({ message: 'Invalid credentials' });
});

app.post('/api/auth/register', (req, res) => {
  const { name, email, password, role } = req.body;
  
  // In a real app, you would validate and save the user to the database
  // This is a mock implementation for demonstration
  const token = jwt.sign(
    { id: '4', name, email, role },
    'your_jwt_secret',
    { expiresIn: '7d' }
  );
  
  return res.json({
    token,
    user: { _id: '4', name, email, role }
  });
});

// User routes
app.get('/api/users/me', (req, res) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    return res.status(401).json({ message: 'No token provided' });
  }
  
  const token = authHeader.split(' ')[1];
  
  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    return res.json({
      _id: decoded.id,
      name: decoded.name,
      email: decoded.email,
      role: decoded.role
    });
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
});

// Course routes
app.get('/api/courses', (req, res) => {
  // In a real app, you would fetch courses from the database
  // This is a mock implementation for demonstration
  res.json([
    {
      id: '1',
      title: 'Complete Web Development Bootcamp',
      instructor: 'Sarah Johnson',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg',
      price: '$89.99',
      rating: 4.8,
      students: 15420,
      category: 'programming',
      level: 'all-levels',
      description: 'Learn web development from scratch. This comprehensive course covers HTML, CSS, JavaScript, React, Node.js and more.',
    },
    {
      id: '2',
      title: 'UI/UX Design Masterclass',
      instructor: 'Michael Chen',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      price: '$69.99',
      rating: 4.7,
      students: 8765,
      category: 'design',
      level: 'intermediate',
      description: 'Master the fundamentals of UI/UX design and create beautiful, user-friendly interfaces that customers will love.',
    },
    // Add more mock courses here
  ]);
});

app.get('/api/courses/:id', (req, res) => {
  // In a real app, you would fetch the course from the database
  // This is a mock implementation for demonstration
  res.json({
    id: req.params.id,
    title: 'Complete Web Development Bootcamp',
    instructor: {
      name: 'Sarah Johnson',
      title: 'Senior Web Developer',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg',
      bio: 'Sarah is a senior web developer with over 10 years of experience working with top tech companies. She specializes in full-stack development and has helped hundreds of students launch their careers in tech.',
    },
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg',
    price: '$89.99',
    rating: 4.8,
    students: 15420,
    category: 'Programming',
    level: 'All Levels',
    description: 'Learn web development from scratch with this comprehensive bootcamp.',
    // Add more mock course details here
  });
});

// In production, serve the React app for any unknown routes
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});