const lista = require('./model')
const update = (id, modelo) => {
    const index = lista.findIndex(carro => carro.id == id);
    var status = false;
    var retorno = {modelo: 'Modelo não encontrado', status}
    if(index > -1){
        status = true
        retorno = {id, modelo, status }
        lista[index].modelo = modelo
    } 
    return {retorno, status}
}
module.exports = update