const { StatusCodes } = require('http-status-codes')
const { search } = require('../../services/Carro')
module.exports = function(req, res) {
    const { id } = req.body;       
    const dados = search(id)
    const status = dados.status
                    ? StatusCodes.OK
                    : StatusCodes.NOT_FOUND
    res.status(status).json(dados.retorno);
}