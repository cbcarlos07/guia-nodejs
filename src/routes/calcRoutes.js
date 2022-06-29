const express = require('express')
const calcController = require( '../controllers/Calc')
const router = express.Router()

router.get('/soma-por-dois', calcController.somaPorDoisController)
router.get('/soma/:primeiro/:segundo', calcController.somaPrimeiroPeloSegundoController);

router.get('/multi/:primeiro/:segundo', calcController.multiPrimeiroPeloSegundo);

router.get('/dividir/:primeiro/:segundo', calcController.dividirPrimeiroPeloSegundo);

router.get('/sub/:primeiro/:segundo', calcController.subPrimeiroPeloSegundo);

module.exports = router