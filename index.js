const express = require('express');
const server  = express();
const quotes = require('./src/data/quotes.json');


server.get('/quotes', (req,res) => {
return res.json(quotes)
});

server.listen(3000, () => {
console.log('Servidor está funcionando...')
});