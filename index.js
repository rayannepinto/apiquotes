const express = require('express');
const cors = require('cors');
const server  = express();
server.use(cors());
const quotes = require('./src/data/quotes.json');


server.get('/quotes', (req,res) => {
return res.json(quotes)
});

server.listen(process.env.PORT || 3000, () => {
console.log('Servidor está funcionando...')
});