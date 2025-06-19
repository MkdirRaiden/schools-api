const asyncHandler = require('express-async-handler');
const { db } = require('../db');
const haversine = require('../utils/haversine');

const addSchool = asyncHandler(async (req, res) => {
    const { name, address, latitude, longitude } = req.body;

    if (!name || !address || latitude == null || longitude == null) {
        res.status(400);
        throw new Error('All fields (name, address, latitude, longitude) are required.');
    }

    if (isNaN(latitude) || isNaN(longitude)) {
        res.status(400);
        throw new Error('Latitude and longitude must be valid numbers.');
    }

    const query = `
    INSERT INTO schools (name, address, latitude, longitude)
    VALUES (?, ?, ?, ?)
  `;

    db.query(query, [name, address, latitude, longitude], (err, result) => {
        if (err) {
            throw new Error('Database insert failed: ' + err.message);
        }

        res.status(201).json({
            success: true,
            message: 'School added successfully.',
            schoolId: result.insertId
        });
    });
});

const listSchools = asyncHandler(async (req, res) => {
    const userLat = parseFloat(req.query.latitude);
    const userLng = parseFloat(req.query.longitude);

    if (isNaN(userLat) || isNaN(userLng)) {
        res.status(400);
        throw new Error('Valid latitude and longitude are required.');
    }

    const query = 'SELECT * FROM schools';

    db.query(query, (err, results) => {
        if (err) {
            throw new Error('Failed to fetch schools: ' + err.message);
        }

        const sorted = results
            .map(school => ({
                ...school,
                distance: haversine(userLat, userLng, school.latitude, school.longitude)
            }))
            .sort((a, b) => a.distance - b.distance);

        res.status(200).json({
            success: true,
            total: sorted.length,
            schools: sorted
        });
    });
});

module.exports = { addSchool, listSchools };
