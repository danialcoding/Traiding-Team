const express = require('express');
const router = express.Router();

module.exports = router;

router.get('/', function (req, res) {
    res.json([
        {
            cryptoname: 'BTC',
            avatar: '',
            pnl: 1
        },
        {
            cryptoname: 'ETH',
            avatar: '',
            pnl: -0.5
        },
        {
            cryptoname: 'BNB',
            avatar: '',
            pnl: 0
        }
    ]);
});

router.get('/top10', function (req, res) {
    res.json([
        {
            cryptoname: 'BTC',
            avatar: '',
            pnl: 1
        },
        {
            cryptoname: 'ETH',
            avatar: '',
            pnl: -0.5
        },
        {
            cryptoname: 'BNB',
            avatar: '',
            pnl: 0
        }
    ]);
});

