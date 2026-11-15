// importação da classe que gerencia as oficinas na memória
const oficinas = require('../model/oficinaMemoria.js')

// função responsável pela exibição do formulário de cadastro
exports.cria_get = async function(req, res){
    contexto = {
        titulo_pagina: "Nova Oficina",
        menu_nova: true,
    }

    // renderiza o arquivo dentro da pasta view
    res.render('criaOficina', contexto);
}

// função responsável por receber os dados do formulário de cadastro
exports.cria_post = async function(req, res){
    // obtém as informações do formulário
    var titulo = req.body.titulo
    var responsavel = req.body.responsavel
    var descricao = req.body.descricao
    // todo dado recebido via formulário é string, então converte para número
    var carga_horaria = parseInt(req.body.carga_horaria)

    // cria a oficina
    await oficinas.cria(titulo, responsavel, descricao, carga_horaria);

    // redireciona para a página principal
    res.redirect('/');
}
