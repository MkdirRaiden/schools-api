// server.js
const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');
const { connectDB } = require('./db');

const PORT = process.env.PORT || 5000;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('Server not started due to DB connection failure.');
        process.exit(1);
    });
