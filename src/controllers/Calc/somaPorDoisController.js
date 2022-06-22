
const { somaPorDois } = require('../../services/Calc')
module.exports = function (req, res) {
    res.json(somaPorDois()) 
}