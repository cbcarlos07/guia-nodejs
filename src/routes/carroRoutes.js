const express = require('express');
const carroController = require('../controllers/Carro')
const router = express.Router();

router.get('', carroController.list)
       .get('/:id', carroController.getId)
       .post('', carroController.create)
       .put('/:id', carroController.update)
       .delete('/:id', carroController.remove)
       .patch('', carroController.search)

module.exports = router


