const lista = require('./model')
const remove = id => {
    const index = lista.findIndex(carro => carro.id == id);
    var status = false;
    var retorno = {msg: 'Modelo não encontrado', status}
    if(index > -1){
        status = true;
        retorno = {msg:  `${id} removido com sucesso`, status}
        lista.splice(index, 1)
    } 
    return retorno
}
module.exports = remove