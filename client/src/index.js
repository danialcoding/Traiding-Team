import React from "react";
import ReactDOM from "react-dom/client";

import App from './app';
//import 'bootstrap/dist/css/bootstrap.min.css'


//ReactDOM.render(<ChatRoom/>,document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// const request = require('request');

// request.get({
//     url: 'localhost:8080/',
//     json: true,
//     qs: {
//         hash: txid,
//     }
//   }, function(error, response, body) {
//     if (!error && response.statusCode == 200) {
//       console.log(body);
//     } else {
//       console.log(error);
//     }
//   });