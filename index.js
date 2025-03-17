// const http = require('http')
// const fs = require('fs');
// const url = require('url');
// const path = require('path');

// http.createServer(function (req, res) {
//     let fileName;
//     const urlExp = req.url;
//     console.log(urlExp);
//     switch (urlExp) {
//         case "/":
//             fileName = 'index.html';
//             break;
//         case "/about":
//             fileName = 'about.html';
//             break;
//         case "/contact":
//             fileName = 'contact-me.html';
//             break;
//         default:
//             fileName = '404.html';
//     }
//     console.log(urlExp);
//     const filePath = path.join(__dirname, fileName);
    
//     fs.readFile(filePath, function(err, data) {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         return res.end();
//     });
// }).listen(8080);

const express = require("express");
const app = express();
const path = require('path');

app.get("/", (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get("/about", (req, res) => res.sendFile(path.join(__dirname, 'about.html')));

app.get("/contact-me", (req, res) => res.sendFile(path.join(__dirname, 'contact-me.html')));


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
