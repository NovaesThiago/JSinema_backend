# 🎬 Sistema de Watchlist

Bem-vindo ao **Sistema de Watchlist**, uma aplicação em Node.js para gerenciar sua lista de filmes favoritos diretamente pelo terminal. Com ela, você pode adicionar, listar, filtrar, editar e remover filmes com facilidade.

---

## 🚀 Funcionalidades

- Inserir novos filmes
- Listar todos os filmes cadastrados
- Deletar filmes por ID
- Filtrar filmes por gênero
- Filtrar filmes por duração
- Alterar informações de um filme existente

---

## 🛠️ Pré-requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- Um terminal compatível (CMD, PowerShell, Bash, etc.)

---

## 🧱 Estrutura do Projeto

| 📁 Caminho            | 📝 Descrição                                 |
|------------------------|----------------------------------------------|
| `src/`                 | Diretório raiz do código-fonte               |
| ├── `dao/`             | Módulo de acesso ao banco de dados           |
| │── `db/`              | Conexão com BD                               |
| ├── `services/`        | Lógica de cada funcionalidade                |
| ├── `utils/`           | Interface readline e utilitários             |
| ├── `main.js`          | Script principal que inicia o sistema        |

---

## 👨‍💻 Autores

**Thiago Novaes**  
**Vinicius Alves** 
📍 Picos, Piauí – Brasil


---

## 📦 Instalação

1. Clone o repositório:
  ```
  git clone https://github.com/seu-usuario/watchlist.git
  ```
2. - Acesse a pasta do projeto:
  ```
  cd watchlist
  ```
3. Instale as dependências:
  ```
  npm install
  ```

---

## ▶️ Como rodar o projeto
  Execute o seguinte comando para iniciar o sistema:
  ```
  npm start
  ```
  Ou, se preferir, diretamente com Node:
  ```
  node src/main.js
  ```
