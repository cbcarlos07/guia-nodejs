const { StatusCodes } = require('http-status-codes')
const { remove } = require('../../services/Carro')
module.exports = function(req, res) {
    const { id } = req.params
    const dados = remove(id)
    const status = dados.status 
                    ? StatusCodes.OK
                    : StatusCodes.NOT_FOUND
    res.status(status).json(dados)
}