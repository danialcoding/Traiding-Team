const express = require('express');
const router = express.Router();

module.exports = router;

router.get('/', function (req, res) {
    res.json([
        {
            username: 'Danial',
            img: 'https://academy-public.coinmarketcap.com/optimized-uploads/9d027de9d68240529c89febbd00abea4.jpg',
            status: 'online',
        },
        {
            username: 'king',
            img: '',
            status: 'offline',
        },
        {
            username: 'mmd',
            img: 'https://academy-public.coinmarketcap.com/optimized-uploads/9d027de9d68240529c89febbd00abea4.jpg',
            status: 'online',
        },
    ]);
});