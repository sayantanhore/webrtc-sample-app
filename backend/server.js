'use strict';

const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = require('socket.io').listen(server);
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello');
});

server.listen(PORT, () => {
  console.log(`Listening @${PORT}`)
});


