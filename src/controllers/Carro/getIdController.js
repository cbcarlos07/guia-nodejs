const { StatusCodes } = require('http-status-codes')
const { getId } = require('../../services/Carro')
module.exports = function(req, res) {
    const { id } = req.params
    const dados = getId(id)
    res.status( dados.status ? 
                        StatusCodes.OK : 
                        StatusCodes.NOT_FOUND
                        ).json(dados.retorno)
}