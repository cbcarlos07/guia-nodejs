const { subPrimeiroPeloSegundo } = require('../../services/Calc')
module.exports = function (req, res) {
    const {primeiro, segundo} = req.params
    res.json(subPrimeiroPeloSegundo(primeiro, segundo)) 
}