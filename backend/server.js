const express = require('express');
const cors = require('cors');  // Import the cors package
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');

const app = express();

// Enable CORS for all routes (or specify your frontend URL if you prefer)
app.use(cors());  // This will allow cross-origin requests from any origin

// Middleware to parse JSON body
app.use(bodyParser.json());

// Use API routes
app.use('/api', apiRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
