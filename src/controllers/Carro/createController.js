const { StatusCodes } = require('http-status-codes')
const { create } = require('../../services/Carro')
module.exports = function(req, res) {
    res.status(StatusCodes.CREATED).json(create)
}