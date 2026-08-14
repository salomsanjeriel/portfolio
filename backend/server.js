const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./src/config/db');

const projectRoutes = require('./src/routes/projectRoutes');
const certificateRoutes = require('./src/routes/certificateRoutes');

// Load env vars
dotenv.config();

// Connect to database
// connectDB(); // Uncomment when MongoDB is ready

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/certificates', certificateRoutes);

// Basic route for testing
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
