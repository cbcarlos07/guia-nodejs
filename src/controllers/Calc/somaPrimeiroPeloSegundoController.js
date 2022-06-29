const { somaPrimeiroPeloSegundo } = require('../../services/Calc')
module.exports = function (req, res) {
    res.json(somaPrimeiroPeloSegundo()) 
}