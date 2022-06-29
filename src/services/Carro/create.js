const lista = require('./model')
const create = modelo => {
    const id = (lista[ lista.length - 1].id ) + 1
    const dados = {modelo, id}
    lista.push(dados)
    return dados
}
module.exports = create