// Neste arquivo serão definidos todos os modelos de dados da aplicação
class Oficina {
    constructor(id, titulo, responsavel, descricao, carga_horaria, aberta) {
        this._id = id;
        this._titulo = titulo;
        this._responsavel = responsavel;
        this._descricao = descricao;
        this._carga_horaria = carga_horaria;
        this._aberta = aberta;
    }
    get id() {
        return this._id;
    }
    get titulo() {
        return this._titulo;
    }
    get responsavel() {
        return this._responsavel;
    }
    get descricao() {
        return this._descricao;
    }
    get carga_horaria() {
        return this._carga_horaria;
    }
    get aberta() {
        return this._aberta;
    }

    set titulo(novoTitulo) {
        this._titulo = novoTitulo;
    }
    set responsavel(novoResponsavel) {
        this._responsavel = novoResponsavel;
    }
    set descricao(novaDescricao) {
        this._descricao = novaDescricao;
    }
    set carga_horaria(novaCarga) {
        this._carga_horaria = novaCarga;
    }
    set aberta(novaAberta) {
        this._aberta = novaAberta;
    }
}

module.exports = Oficina
