const express = require('express');
const app = express();
const fnRoutes  = require('./routes')

fnRoutes(app);

module.exports = app