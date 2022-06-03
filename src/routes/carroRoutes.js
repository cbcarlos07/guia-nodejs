const express = require('express');
const router = express.Router();
const lista = [
    {id: 1, modelo: 'Onix'},
    {id: 2, modelo: 'Cruze'},
    {id: 3, modelo: 'Prisma'},
    {id: 4, modelo: 'Spin'},
    {id: 5, modelo: 'Camaro'}	
  ]

router.get('', (req, res) => {
   res.json(lista)
})
    .get('/:id', (request, response) => {
        const { id } = request.params;
        const modelo = lista.find(carro => carro.id == id);        
        var retorno = {msg: 'Modelo não encontrado'}
        if(modelo){
            retorno = modelo
        } 
        response.json(retorno);
    })
    .post('', (req, res) => {
        const {modelo} = req.body
        const id = (lista[ lista.length - 1].id ) + 1
        const dados = {modelo, id}
        lista.push(dados)
        res.json(dados);
    })
    .put('/:id', (request, response) => {
        const { id } = request.params;
        const { modelo } = request.body
        const index = lista.findIndex(carro => carro.id == id);
        var retorno = {msg: 'Modelo não encontrado'}
        if(index > -1){
            retorno = {id, modelo }
            lista[index].modelo = modelo
        } 
        response.json(retorno);
    })
    .delete('/:id', (request, response) => {
        const { id } = request.params;       
        const index = lista.findIndex(carro => carro.id == id);
        var retorno = {msg: 'Modelo não encontrado'}
        if(index > -1){
            retorno = {msg:  `${id} removido com sucesso`}
            lista.splice(index, 1)
        } 
        response.json(retorno);
    })

module.exports = router


