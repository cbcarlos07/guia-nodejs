const lista = require('./model')
const search = id => {
    const modelo = lista.find(carro => carro.id == id);
    var status = false;
    var retorno = {msg: 'Modelo não encontrado', status}
    if(modelo){
        status = true;
        retorno = {modelo, status}            
    } 
    
    return {retorno, status}
}
module.exports = search