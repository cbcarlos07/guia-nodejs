const express = require('express')

const router = express.Router()

router.get('/', (req, res) => res.send({mensagem: 'Olá mundo!'}));

module.exports = router

