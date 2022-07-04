const { StatusCodes } = require('http-status-codes')
const { create } = require('../../services/Carro')
module.exports = function(req, res) {
    const {modelo} = req.body
    const retorno = create(modelo)
    res.status(StatusCodes.CREATED).json(retorno)
}