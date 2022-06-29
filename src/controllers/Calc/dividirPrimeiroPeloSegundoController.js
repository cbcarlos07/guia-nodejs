const { dividirPrimeiroPeloSegundoController } = require('../../services/Calc')
module.exports = function (req, res) {
    const {primeiro, segundo} = req.params
    res.json(dividirPrimeiroPeloSegundoController(primeiro, segundo)) 
}