// const http = require('http');
// const port = 8080;

// const server = http.createServer((req, res) => {
//     res.end("Hello world!")
// })

// server.listen(port, () => {
//     console.log('Сервер запущен по адрессу: http://localhost:%s', port)
// })

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello world!");
});

app.listen(8080, () => {
    console.log('Сервер запущен по адресу: http://localhost:8080');
});
