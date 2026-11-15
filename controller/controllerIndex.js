// importação da classe que gerencia as oficinas na memória
const oficinas = require('../model/oficinaMemoria.js')

// calcula os indicadores a partir de todas as oficinas em memória
function calcula_resumo(lista){
    var abertas = lista.filter(o => o.aberta)
    var soma_carga = 0
    for (var o of abertas) {
        soma_carga = soma_carga + o.carga_horaria
    }
    return {
        total: lista.length,
        abertas: abertas.length,
        encerradas: lista.length - abertas.length,
        carga_abertas: soma_carga,
    }
}

// cria e já exporta a função que será responsável pela tela principal
exports.tela_principal = async function(req, res){
    const lista = await oficinas.lista()

    contexto = {
        titulo_pagina: "Catálogo de Oficinas",
        menu_inicio: true,
        resumo: calcula_resumo(lista),
        oficinas: lista,
        catalogo_vazio: lista.length == 0,
    }

    // renderiza o arquivo index.hbs, dentro da pasta view
    res.render('index', contexto);
}

exports.sobre = async function(req, res){
    contexto = {
        titulo_pagina: "Sobre o Catálogo",
        menu_sobre: true,
    }

    // renderiza o arquivo na dentro da pasta view
    res.render('sobre', contexto);
}
