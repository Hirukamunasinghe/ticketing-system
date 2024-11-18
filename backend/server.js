// server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');

// Middleware to parse JSON body
app.use(bodyParser.json());

// Use API routes
app.use('/api', apiRoutes);

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
