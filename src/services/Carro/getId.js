const lista = require('./model')
const getId = id => {    
    const modelo = lista.find(carro => carro.id == id);
    var status = false;
    var retorno = {modelo: 'Modelo não encontrado', status}
    if(modelo){
        status = true
        retorno = {modelo};
    } 
    return {status, retorno}
}
module.exports = getId