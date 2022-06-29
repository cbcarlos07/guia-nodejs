const { StatusCodes } = require('http-status-codes')
const { update } = require('../../services/Carro')
module.exports = function(req, res) {
    const { id } = req.params
    const { modelo } =req.body
    const dados = update(id, modelo)
    const status = dados.status 
                    ? StatusCodes.OK
                    : StatusCodes.NOT_FOUND
    res.status(status).json(dados)
}