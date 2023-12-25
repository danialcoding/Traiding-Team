const express = require('express');
const router = express.Router();

module.exports = router;

router.get('/', function (req, res) {
    res.json([
        {
            teamusername: '',
            teamname: '',
            traidingtypes: [],
            timeframes: [],
            educationalcontent: '',
            educationalcontentlanguage: '',
            avatar: '',
            pnl: 120
        },
        {
            teamname: 'forexteam',
            avatar: '',
            pnl: -230
        },
        {
            teamname: 'cryptoteam',
            avatar: '',
            pnl: 0
        }
    ]);
});

router.get('/top10', function (req, res) {
    res.json([
        {
            teamname: 'DANIAL',
            avatar: '',
            pnl: 120
        },
        {
            teamname: 'forexteam',
            avatar: '',
            pnl: -230
        },
        {
            teamname: 'cryptoteam',
            avatar: '',
            pnl: 0
        }
    ]);
});

