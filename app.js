const express = require('express');
const cors = require('cors');
const errorHandler = require('./utils/errorHandler.js');
const schoolRoutes = require('./routes/schoolRoutes.js');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//routes
app.use('/api/schools', schoolRoutes);
app.get('/', (req, res) => {
    res.send('School Management API is running.');
});

//global error handler
app.use(errorHandler);

module.exports = app;

