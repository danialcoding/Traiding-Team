const express = require('express');
const router = express.Router();
const {cryptoNewsAPI,forexNewsAPI} = require('../API/news');

module.exports = router;

router.get('/', function (req, res) {
    res.json([
        {
            topic: 'danial create new company',
            info: 'Lorem ipsum d psum dolor sit amet, consectetur adipiscing elit. Etiam dui metus, semper a risus quis, aliquet posuere eros. Proin susc olor sit amet, consectetur adipiscing elit. Etiam dui metus, semper a risus quis, aliquet posuere eros. Proin suscipit.',
            time: '17:22',
            date: '04/05/2022',
            link: '/',
            img: 'https://academy-public.coinmarketcap.com/optimized-uploads/9d027de9d68240529c89febbd00abea4.jpg',
        },
        {
            topic: 'danial create',
            info: 'Lorem ipsum d psum dos, semper a risus quis, aliquet posuere eros. Proin susc olor sit amet, consectetur adipiscing elit. Etiam dui metus, semper a risus quis, aliquet posuere eros. Proin suscipit.',
            time: '00:00',
            date: '04/05/2022',
            link: '/',
            img: 'https://academy-public.coinmarketcap.com/optimized-uploads/9d027de9d68240529c89febbd00abea4.jpg',
        },
        {
            topic: 'create new company',
            info: 'Lorem ipsum d psum dolor.',
            time: '08:08',
            date: '04/05/2022',
            link: '/',
            img: 'https://academy-public.coinmarketcap.com/optimized-uploads/9d027de9d68240529c89febbd00abea4.jpg',
        },
    ]);
});


router.get('/new', function (req, res) {
    //cryptoNewsAPI();
    // forexNewsAPI();

    res.json([
        {
            topic: 'danial create new company alone and powerfull',
            info: 'Lorem ipsum d psum dolor sit amet, consectetur adipiscing elit. Etiam dui metus, semper a risus quis, aliquet posuere eros. Proin susc olor sit amet, consectetur adipiscing elit. Etiam dui metus, semper a risus quis, aliquet posuere eros. Proin suscipit.',
            time: '17:22',
            date: '04/05/2022',
            link: '/',
            img: 'https://academy-public.coinmarketcap.com/optimized-uploads/9d027de9d68240529c89febbd00abea4.jpg',
        },
        {
            topic: 'danial create',
            info: 'Lorem ipsum d psum dos, semper a risus quis, aliquet posuere eros. Proin susc olor sit amet, consectetur adipiscing elit. Etiam dui metus, semper a risus quis, aliquet posuere eros. Proin suscipit.',
            time: '00:00',
            date: '04/05/2022',
            link: '/',link: '/',
            img: 'https://academy-public.coinmarketcap.com/optimized-uploads/9d027de9d68240529c89febbd00abea4.jpg',
        },
        {
            topic: 'create new company',
            info: 'Lorem ipsum d psum dolor.',
            time: '08:08',
            date: '04/05/2022',
            link: '/',
            img: 'https://academy-public.coinmarketcap.com/optimized-uploads/9d027de9d68240529c89febbd00abea4.jpg',
        },
        {
            topic: 'danial create new company',
            info: 'Lorem ipsum d psum dolor sit amet, consectetur adipiscing elit. Etiam dui metus, semper a risus quis, aliquet posuere eros. Proin susc olor sit amet, consectetur adipiscing elit. Etiam dui metus, semper a risus quis, aliquet posuere eros. Proin suscipit.',
            time: '17:22',
            date: '04/05/2022',
            link: '/',
            img: 'https://academy-public.coinmarketcap.com/optimized-uploads/9d027de9d68240529c89febbd00abea4.jpg',
        },
        {
            topic: 'danial create',
            info: 'Lorem ipsum d psum dos, semper a risus quis, aliquet posuere eros. Proin susc olor sit amet, consectetur adipiscing elit. Etiam dui metus, semper a risus quis, aliquet posuere eros. Proin suscipit.',
            time: '00:00',
            date: '04/05/2022',
            link: '/',
            img: 'https://academy-public.coinmarketcap.com/optimized-uploads/9d027de9d68240529c89febbd00abea4.jpg',
        },
        {
            topic: 'create new company',
            info: 'Lorem ipsum d psum dolor.',
            time: '08:08',
            date: '04/05/2022',
            date: '04/05/2022',
            link: '/',
            img: 'https://academy-public.coinmarketcap.com/optimized-uploads/9d027de9d68240529c89febbd00abea4.jpg',
        },
    ]);
});
router.get('/crypto_news', function (req, res) {
    res.json([
        {
            topic: 'create new company',
            info: 'Lorem ipsum d psum dolor.',
            time: '08:08',
            date: '04/05/2022',
            date: '04/05/2022',
            link: '/',
            img: 'https://academy-public.coinmarketcap.com/optimized-uploads/9d027de9d68240529c89febbd00abea4.jpg',
        },

    ])
});
router.get('/forex_news', function (req, res) {
    res.json([
        {
            topic: 'create new company',
            info: 'Lorem ipsum d psum dolor.',
            time: '08:08',
            date: '04/05/2022',
            date: '04/05/2022',
            link: '/',
            img: 'https://academy-public.coinmarketcap.com/optimized-uploads/9d027de9d68240529c89febbd00abea4.jpg',
        },

    ])
});