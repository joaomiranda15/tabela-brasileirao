# ⚽ Tabela Brasileirão API — João Paulo de Miranda Carvalho

> API REST desenvolvida em **Node.js** e **Express** para consulta, gerenciamento e atualização da tabela de classificação dos 20 clubes da Série A do Campeonato Brasileiro, com validação de dados via **Joi**.

[![GitHub](https://img.shields.io/badge/GitHub-joaomiranda15-181717?style=for-the-badge&logo=github)](https://github.com/joaomiranda15)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-João%20Paulo-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/joaomirandac)

---

## 📖 Sobre o Projeto

A **Tabela Brasileirão API** é um serviço backend voltado para o gerenciamento das informações dos 20 clubes participantes do Campeonato Brasileiro. A aplicação oferece operações completas de CRUD (Create, Read, Update, Delete) em memória, garantindo integridade dos dados por meio de validações com schemas robustos.

---

## 🛠️ Tecnologias Utilizadas

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

- **Node.js** — Ambiente de execução JavaScript no servidor (módulos ES6).
- **Express 5** — Framework minimalista para criação e roteamento dos endpoints HTTP.
- **Joi** — Biblioteca para validação de dados e schemas das requisições.

---

## ✨ Funcionalidades

- 📋 **Listagem Completa**: Consulta a tabela inteira com todos os 20 times e suas estatísticas.
- 🔍 **Busca por Sigla**: Filtro de time específico através da sigla oficial (ex: `FLA`, `PAL`, `COR`), com normalização para maiúsculas.
- 🛡️ **Validação de Entrada com Joi**:
  - `modeloTime`: Exige `nome` (mín. 4 caracteres), `sigla` (exatamente 3 caracteres) e inicializa campos numéricos zerados por padrão.
  - `modeloAtualizacaoTime`: Permite atualizar pontualmente um ou mais campos exigindo valores consistentes (números $\ge 0$).
- 🔄 **Atualização Dinâmica (PUT)**: Atualiza apenas os campos enviados no corpo da requisição.
- ➕ **Cadastro de Novo Time (POST)**: Adiciona um novo clube à tabela com status HTTP `201 Created`.
- ❌ **Remoção de Time (DELETE)**: Remove um time pela sigla e devolve os dados removidos.
- 🚦 **Tratamento de Status HTTP**: Retorno padronizado com códigos adequados (`200 OK`, `201 Created`, `400 Bad Request` e `404 Not Found`).

---

## 📌 Rotas da API

| Método | Endpoint | Descrição | Status de Sucesso | Status de Erro |
|---|---|---|---|---|
| `GET` | `/` | Retorna a tabela completa com todos os times | `200 OK` | — |
| `GET` | `/:sigla` | Retorna os detalhes de um time pela sigla | `200 OK` | `404 Not Found` |
| `POST` | `/` | Cadastra um novo clube na tabela | `201 Created` | `400 Bad Request` |
| `PUT` | `/:sigla` | Atualiza campos de um time existente | `200 OK` | `400 Bad Request`, `404 Not Found` |
| `DELETE` | `/:sigla` | Remove um time da tabela | `200 OK` | `404 Not Found` |

---

## 🗂️ Estrutura do Projeto

```
tabela-brasileirao/
├── app.js               # Instância do servidor Express, rotas e lógica dos endpoints
├── tabela.js            # Base de dados em memória com os 20 times da Série A
├── validacao.js         # Schemas Joi de validação para inserção e atualização
├── package.json         # Dependências do projeto e metadados
├── package-lock.json    # Travamento de versões das dependências
├── .gitignore           # Arquivos ignorados pelo controle de versão
└── README.md            # Documentação da aplicação
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado (versão 20 ou superior recomendada).

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/joaomiranda15/tabela-brasileirao.git
   cd tabela-brasileirao
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   node app.js
   ```

4. Acesse a API no seu navegador ou cliente HTTP (Postman/Insomnia/Thunder Client):
   ```
   http://localhost:300/
   ```

---

## 👤 Autor

**João Paulo de Miranda Carvalho**  
Estudante de Ciência da Computação na UCB • Estagiário Analista Fluig na Ascendra  
📧 paulocjpaulo@gmail.com

