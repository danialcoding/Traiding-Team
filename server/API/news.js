const axios = require("axios");


function cryptoNewsAPI() {
    const options = {
        method: 'GET',
        url: 'https://bing-news-search1.p.rapidapi.com/news',
        params: {count: '16', category: 'Cryptocurrency', safeSearch: 'Off', textFormat: 'Raw'},
        headers: {
          'X-BingApis-SDK': 'true',
          'X-RapidAPI-Key': '2354c226bcmsh0529c5500d42d6fp1a76ecjsnf6e40de8e8ee',
          'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response);
      }).catch(function (error) {
          console.error(error);
      });
}

function forexNewsAPI() {
    const options = {
        method: 'GET',
        url: 'https://bing-news-search1.p.rapidapi.com/news',
        params: {count: '16', category: 'forex', safeSearch: 'Off', textFormat: 'Raw'},
        headers: {
          'X-BingApis-SDK': 'true',
          'X-RapidAPI-Key': '2354c226bcmsh0529c5500d42d6fp1a76ecjsnf6e40de8e8ee',
          'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });
}

module.exports = {
    cryptoNewsAPI,
    forexNewsAPI,
}