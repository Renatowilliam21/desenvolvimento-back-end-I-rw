// importação da classe que gerencia as oficinas na memória
const oficinas = require('../model/oficinaMemoria.js')

// cria e já exporta a função que será responsável pela tela principal
exports.tela_principal = async function(req, res){
    const lista = await oficinas.lista()

    contexto = {
        titulo_pagina: "Catálogo de Oficinas",
        menu_inicio: true,
        oficinas: lista,
        catalogo_vazio: lista.length == 0,
    }

    // renderiza o arquivo index.hbs, dentro da pasta view
    res.render('index', contexto);
}
