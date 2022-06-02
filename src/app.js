const express = require('express');
const app = express();
const fnRoutes  = require('./routes')

fnRoutes(app);

app.listen(3000, () => console.log('API rodando na porta 3000'));