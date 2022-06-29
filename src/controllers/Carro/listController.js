const { StatusCodes } = require('http-status-codes')
const { list } = require('../../services/Carro')
module.exports = function(req, res) {
    res.status(StatusCodes.OK).json(list)
}