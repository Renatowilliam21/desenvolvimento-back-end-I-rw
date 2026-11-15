// importação da classe Oficina no arquivo "modelos.js"
var Oficina = require("./modelos.js")

const lista_oficinas = [] //será um vetor de objetos do tipo Oficina
let proximo_id = 1 // o ID é gerado pela aplicação no cadastro

class OficinaMemoria {

    // métodos assíncronos para simular os métodos de um ORM
    async cria(titulo, responsavel, descricao, carga_horaria) {
        const id = proximo_id
        proximo_id++
        // toda oficina nova começa com inscrições abertas
        lista_oficinas[id] = new Oficina(id, titulo, responsavel, descricao, carga_horaria, true)
        return lista_oficinas[id]
    }
    async atualiza(id, titulo, responsavel, descricao, carga_horaria) {
        if (lista_oficinas[id]) {
            // preserva o ID e a situação das inscrições
            const aberta = lista_oficinas[id].aberta
            lista_oficinas[id] = new Oficina(id, titulo, responsavel, descricao, carga_horaria, aberta)
            return lista_oficinas[id]
        } else throw new Error(`Oficina com o id ${id} não existe`);
    }
    async atualizaSituacao(id, aberta) {
        if (lista_oficinas[id]) {
            lista_oficinas[id].aberta = aberta
            return lista_oficinas[id]
        } else throw new Error(`Oficina com o id ${id} não existe`);
    }
    async consulta(id) {
        if (lista_oficinas[id]) return lista_oficinas[id];
        else throw new Error(`Oficina com o id ${id} não existe`);
    }
    async deleta(id) {
        if (lista_oficinas[id]) {
            delete lista_oficinas[id]
        } else throw new Error(`Oficina com o id ${id} não existe`);
    }
    async lista() {
        return Object.values(lista_oficinas)
    }
}

// cria um objeto do tipo OficinaMemoria que será utilizado para gerenciar as oficinas
var oficinas = new OficinaMemoria()

module.exports = oficinas
