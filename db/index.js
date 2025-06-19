const mysql = require('mysql2');

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

const connectDB = () => {
    return new Promise((resolve, reject) => {
        db.connect(err => {
            if (err) {
                console.error('MySQL connection failed:', err.message);
                reject(err);
            } else {
                console.log('Connected to MySQL database');
                resolve();
            }
        });
    });
};

module.exports = { db, connectDB };
