const express = require('express');
const app = express();
const connectDB = require('./config/dbConnection');
const jobRoutes = require('./routes/job.route');
require('dotenv').config();
const PORT = process.env.PORT || 3000;


// Connect to MongoDB
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Job routes
app.use('/', jobRoutes);

 
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });



