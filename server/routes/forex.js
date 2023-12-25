const express = require('express');
const router = express.Router();

module.exports = router;

router.get('/', function (req, res) {
    res.json([
        {
            forexname: 'EURUSD',
            avatar1: '',
            avatar2: '',
            pnl: 1
        },
        {
            forexname: 'USDCAD',
            avatar1: '',
            avatar2: '',
            pnl: -0.5
        },
        {
            forexname: 'USDJPY',
            avatar1: '',
            avatar2: '',
            pnl: 0
        }
    ]);
});

router.get('/top10', function (req, res) {
    res.json([
        {
            forexname: 'EURUSD',
            avatar1: '',
            avatar2: '',
            pnl: 1
        },
        {
            forexname: 'USDCAD',
            avatar1: '',
            avatar2: '',
            pnl: -0.5
        },
        {
            forexname: 'USDJPY',
            avatar1: '',
            avatar2: '',
            pnl: 0
        }
    ]);
});

