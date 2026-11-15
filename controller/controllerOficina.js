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

// função responsável pela consulta de uma oficina
exports.consulta = async function(req, res){
    //informação passada como parâmetro na url
    var id = req.params.id_oficina
    var oficina = await oficinas.consulta(id);

    contexto = {
        titulo_pagina: "Consulta de Oficina",
        id: oficina.id,
        titulo: oficina.titulo,
        responsavel: oficina.responsavel,
        descricao: oficina.descricao,
        carga_horaria: oficina.carga_horaria,
        aberta: oficina.aberta,
    }
    // renderiza o arquivo dentro da pasta view
    res.render('consultaOficina', contexto);
}

// função responsável pela exibição do formulário de edição
exports.altera_get = async function(req, res){
    //informação passada como parâmetro na url
    var id = req.params.id_oficina
    var oficina = await oficinas.consulta(id);

    contexto = {
        titulo_pagina: "Editar Oficina",
        id: oficina.id,
        titulo: oficina.titulo,
        responsavel: oficina.responsavel,
        descricao: oficina.descricao,
        carga_horaria: oficina.carga_horaria,
    }

    // renderiza o arquivo dentro da pasta view
    res.render('alteraOficina', contexto);
}

// função responsável por receber os dados do formulário de edição
exports.altera_post = async function(req, res){
    //informação passada como parâmetro na url
    var id = req.params.id_oficina
    // obtém as informações do formulário
    var titulo = req.body.titulo
    var responsavel = req.body.responsavel
    var descricao = req.body.descricao
    var carga_horaria = parseInt(req.body.carga_horaria)

    // atualiza a oficina (o ID e a situação são preservados)
    await oficinas.atualiza(id, titulo, responsavel, descricao, carga_horaria);

    // redireciona para a página principal
    res.redirect('/');
}

// função responsável por encerrar as inscrições de uma oficina
exports.encerra = async function(req, res){
    var id = req.params.id_oficina
    // atualiza somente a situação da oficina
    await oficinas.atualizaSituacao(id, false);
    res.redirect('/');
}

// função responsável por reabrir as inscrições de uma oficina
exports.reabre = async function(req, res){
    var id = req.params.id_oficina
    // atualiza somente a situação da oficina
    await oficinas.atualizaSituacao(id, true);
    res.redirect('/');
}

// função responsável pela exclusão da oficina (a confirmação é feita na janela modal)
exports.deleta = async function(req, res){
    //informação passada como parâmetro na url
    var id = req.params.id_oficina
    await oficinas.deleta(id);
    // redireciona para a página principal
    res.redirect('/');
}

// função responsável pela exibição da página de pesquisa (sem pesquisa realizada)
exports.pesquisa_get = async function(req, res){
    contexto = {
        titulo_pagina: "Pesquisa de Oficinas",
        menu_pesquisa: true,
        pesquisou: false,
    }

    res.render('pesquisaOficina', contexto);
}

// função responsável por receber o termo e exibir o resultado na mesma página
exports.pesquisa_post = async function(req, res){
    var termo = req.body.termo
    var lista = await oficinas.lista()

    // compara os títulos sem distinguir maiúsculas de minúsculas
    var encontradas = []
    for (var o of lista) {
        if (o.titulo.toLowerCase().includes(termo.toLowerCase())) {
            encontradas.push(o)
        }
    }

    contexto = {
        titulo_pagina: "Pesquisa de Oficinas",
        menu_pesquisa: true,
        pesquisou: true,
        termo: termo,
        encontradas: encontradas,
    }

    res.render('pesquisaOficina', contexto);
}
