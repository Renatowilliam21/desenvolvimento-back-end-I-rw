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

// monta o contexto da tela principal, com todas as oficinas ou somente as abertas
async function monta_contexto(somente_abertas){
    const lista = await oficinas.lista()
    var exibidas = lista
    if (somente_abertas) {
        exibidas = lista.filter(o => o.aberta)
    }

    return {
        titulo_pagina: "Catálogo de Oficinas",
        menu_inicio: true,
        // o resumo sempre considera o catálogo completo
        resumo: calcula_resumo(lista),
        oficinas: exibidas,
        somente_abertas: somente_abertas,
        catalogo_vazio: lista.length == 0,
        sem_abertas: lista.length > 0 && exibidas.length == 0,
    }
}

// cria e já exporta a função que será responsável pela tela principal
exports.tela_principal = async function(req, res){
    contexto = await monta_contexto(false)

    // renderiza o arquivo index.hbs, dentro da pasta view
    res.render('index', contexto);
}

// função responsável pela visualização das oficinas com inscrições abertas
exports.abertas = async function(req, res){
    contexto = await monta_contexto(true)

    // reutiliza o mesmo arquivo index.hbs
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
