# 🎬 JSinema

Bem-vindo ao **JSinema**, uma aplicação em Node.js para gerenciar sua lista de filmes favoritos diretamente pelo terminal. Com ela, você pode adicionar, listar, filtrar, editar e remover filmes com facilidade.

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

- **Thiago Novaes**  📍 Picos, Piauí – Brasil
- **Vinicius Alves** 📍 Picos, Piauí – Brasil



---

## 📦 Instalação

1. Clone o repositório:
  ```
  git clone https://github.com/NovaesThiago/JSinema_backend.git
  ```
2. Acesse a pasta do projeto:
  ```
  cd JSinema_backend
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
# 📦 Configuração do Ambiente (.env)

Antes de iniciar o projeto, é essencial configurar corretamente o arquivo `.env` com as informações do seu banco de dados. Isso garante que a aplicação consiga se conectar e funcionar como esperado.

## 📝 Como preencher o `.env`

Preencha os campos abaixo com os dados do seu banco de dados:

```env
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=
```
  Exemplo:
  - DB_HOST: geralmente é localhost ou 127.0.0.1
  - DB_PORT: PostgreSQL: 5432
  - DB_USER e DB_PASSWORD: são definidos na instalação. Se você não lembra, pode verificar no painel de administração (como phpMyAdmin ou pgAdmin) ou nos arquivos de configuração.
  - DB_NAME: é o nome do banco que você criou. Dá pra ver isso com um comando SQL como SHOW DATABASES; ou direto no painel.

---

## ⏱️ Atualizações futuras

- O JSinema vai receber muito em breve sua versão com o Frontend totalmente funcional!
- Diversas novas funções novas como cadastro de Adm podendo atualizar o catalogo e muito mais!
- Cadastro de Usuário podendo ter o seu perfil com sua WatchList e compartilhar a mesma!
- fique atento às atualizações!
---
