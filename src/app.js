const express = require('express');
const app = express();

app.get('/', (req, res) => res.send({mensagem: 'Olá mundo!'}));
app.get('/soma-por-dois', (req, res) => {
    res.json({resultado: 2 + 2})
});
app.get('/soma/:primeiro/:segundo', (req, res) => {
    const {primeiro, segundo} = req.params
    res.json({resultado: parseInt(primeiro) + parseInt(segundo)})
});

app.get('/multi/:primeiro/:segundo', (req, res) => {
    const { primeiro, segundo } = req.params;
    res.json({resultado: parseInt(primeiro) * parseInt(segundo)})
});

app.get('/dividir/:primeiro/:segundo', (req, res) => {
    const { primeiro, segundo } = req.params;
    res.json({resultado: parseInt(primeiro) / parseInt(segundo)})
});

app.get('/sub/:primeiro/:segundo', (req, res) => {
    const { primeiro, segundo } = req.params;
    res.json({resultado: parseInt(primeiro) - parseInt(segundo)})
});



app.listen(3000, () => console.log('API rodando na porta 3000'));