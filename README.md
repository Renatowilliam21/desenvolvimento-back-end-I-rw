# Catálogo de Oficinas

Avaliação Prática 01 da disciplina Desenvolvimento Back-end I (Pós-graduação em Desenvolvimento Fullstack, IF Sudeste MG).

Aplicação web com renderização no servidor para manter um catálogo de oficinas de treinamento. Os dados ficam em memória durante a execução.

Tecnologias: Node.js, Express (gerado com `express --view=hbs`), Handlebars e Bootstrap 5.3 (instalação offline).

## Executar

```
npm install
npm start
```

Acesse http://localhost:3000

## Rotas

| Método | Rota | Funcionalidade |
|---|---|---|
| GET | `/` | Tela principal (todas as oficinas) |
| GET | `/abertas` | Oficinas com inscrições abertas |
| GET | `/sobre` | Página Sobre |
| GET / POST | `/oficina/cria` | Cadastro |
| GET | `/oficina/consulta/:id_oficina` | Consulta |
| GET / POST | `/oficina/altera/:id_oficina` | Edição |
| GET | `/oficina/encerra/:id_oficina` | Encerrar inscrições |
| GET | `/oficina/reabre/:id_oficina` | Reabrir inscrições |
| GET | `/oficina/deleta/:id_oficina` | Exclusão (após confirmação no modal) |
| GET / POST | `/oficina/pesquisa` | Pesquisa por título |

## Estrutura

`model/` (dados em memória), `controller/`, `routes/`, `views/` (Handlebars) e `public/` (Bootstrap offline).
