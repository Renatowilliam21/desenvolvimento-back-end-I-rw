// Gerenciamento das oficinas na memória do computador
// Cada oficina é um objeto Javascript (notação de chaves)

const lista_oficinas = [] //será um vetor de objetos do tipo oficina
let proximo_id = 1 // o ID é gerado pela aplicação no cadastro

class OficinaMemoria {

    // métodos assíncronos para simular os métodos de um ORM
    async cria(titulo, responsavel, descricao, carga_horaria) {
        const id = proximo_id
        proximo_id++
        // toda oficina nova começa com inscrições abertas
        lista_oficinas[id] = {
            id: id,
            titulo: titulo,
            responsavel: responsavel,
            descricao: descricao,
            carga_horaria: carga_horaria,
            aberta: true,
        }
        return lista_oficinas[id]
    }
    async atualiza(id, titulo, responsavel, descricao, carga_horaria) {
        if (lista_oficinas[id]) {
            // preserva o ID e a situação das inscrições
            lista_oficinas[id].titulo = titulo
            lista_oficinas[id].responsavel = responsavel
            lista_oficinas[id].descricao = descricao
            lista_oficinas[id].carga_horaria = carga_horaria
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
