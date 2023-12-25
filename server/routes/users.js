const express = require('express');
const router = express.Router();

module.exports = router;

router.get('/', function (req, res) {
    res.json([
        {
            username: 'danial',
            email: 'danial@yahoo.com',
            password: 'Df2425505'
        }
    ]);
});

