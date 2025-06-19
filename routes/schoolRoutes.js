const express = require('express');
const { addSchool, listSchools } = require('../controllers/schoolController');

const router = express.Router();

router.route("/")
    .get(listSchools)
    .post(addSchool);

module.exports = router;
