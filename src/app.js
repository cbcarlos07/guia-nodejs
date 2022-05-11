const express = require('express');
const app = express();

app.get('/', (req, res) => res.send({mensagem: 'Olá mundo!'}));

app.listen(3000, ()=> {
  console.log('API rodando na porta 3000');
});