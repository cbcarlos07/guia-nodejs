const express = require('express');
const app = express();
const fnRoutes  = require('./routes')

app.use(express.json())
fnRoutes(app);

module.exports = app