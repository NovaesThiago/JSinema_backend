import { WatchlistDAO } from "./WatchlistDAO.js";
import readline from "readline/promises";

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let sair = false;

  console.log("=== Sistema de Watchlist ===");

  while (!sair) {
    console.log("\nEscolha uma opção:");
    console.log("1 - Inserir filme");
    console.log("2 - Listar filmes");
    console.log("3 - Deletar filme");
    console.log("4 - Filtrar por Gênero");
    console.log("5 - Filtrar por Duração");
    console.log("6 - Alterar Filmes");
    console.log("0 - Sair")

    const opcao = await rl.question("Opção: ");

    switch (opcao.trim()) {
      case "1":
        const titulo = await rl.question("\nTítulo: ");
        const genero = await rl.question("Gênero: ");
        const diretor = await rl.question("Diretor: ");
        const ano = parseInt(await rl.question("Ano: "));
        const sinopse = await rl.question("Sinopse: ");
        const duracaoemmin = parseInt(await rl.question("Duração (min): "));

        const novoFilme = {
          titulo,
          genero,
          diretor,
          ano,
          sinopse,
          duracaoemmin,
        };

        try {
          const filmeInserido = await WatchlistDAO.inserir(novoFilme);
          console.log("Filme inserido com sucesso:", filmeInserido);
        } catch (error) {
          console.error("Erro ao inserir filme:", error.message);
        }
        break;

      case "2":
        try {
          const filmes = await WatchlistDAO.listar();

          if (filmes.length === 0) {
            console.log("Nenhum filme cadastrado.");
          } else {
            console.log("\nFilmes na watchlist:");
            filmes.forEach((f) => {
              console.log(`${f.id} - ${f.titulo} (${f.ano})`);
            });
          }
        } catch (error) {
          console.error("Erro ao listar filmes:", error.message);
        }
        break;

      case "3":
        const idParaDeletar = parseInt(
          await rl.question("Digite o ID do filme a deletar: ")
        );

        try {
          const deletado = await WatchlistDAO.deletar(idParaDeletar);

          if (deletado) {
            console.log(`Filme "${deletado.titulo}" deletado com sucesso!`);
          } else {
            console.log("Nenhum filme encontrado com esse ID.");
          }
        } catch (error) {
          console.error("Erro ao deletar filme:", error.message);
        }
        break;

      case "4":
        const generoFiltro = await rl.question("Digite o gênero para filtrar: ");
        try {
          const filmes = await WatchlistDAO.listar();
          const filtrados = filmes.filter(f => f.genero.toLowerCase() === generoFiltro.toLowerCase());

          if (filtrados.length === 0) {
            console.log("Nenhum filme encontrado com esse gênero.");
          } else {
            console.log("\nFilmes encontrados:");
            filtrados.forEach(f => console.log(`${f.id} - ${f.titulo} (${f.genero})`));
          }
        } catch (error) {
          console.error("Erro ao filtrar por gênero:", error.message);
        }
        break;
        
      case "5":
        const duracaoMax = parseInt(await rl.question("Filtrar por duração máxima (min): "));
        try {
          const filmes = await WatchlistDAO.listar();
          const filtrados = filmes.filter(f => f.duracaoemmin <= duracaoMax);

          if (filtrados.length === 0) {
            console.log("Nenhum filme encontrado com essa duração.");
          } else {
            console.log("\nFilmes encontrados:");
            filtrados.forEach(f => console.log(`${f.id} - ${f.titulo} (${f.duracaoemmin} min)`));
          }
        } catch (error) {
          console.error("Erro ao filtrar por duração:", error.message);
        }
        break;

      case "6":
        const idParaAlterar = parseInt(await rl.question("Digite o ID do filme a alterar: "));
        try {
          const filmes = await WatchlistDAO.listar();
          const filme = filmes.find(f => f.id === idParaAlterar);

          if (!filme) {
            console.log("Filme não encontrado.");
            break;
          }

          const novoTitulo = await rl.question(`Novo título (${filme.titulo}): `) || filme.titulo;
          const novoGenero = await rl.question(`Novo gênero (${filme.genero}): `) || filme.genero;
          const novoDiretor = await rl.question(`Novo diretor (${filme.diretor}): `) || filme.diretor;
          const novoAno = parseInt(await rl.question(`Novo ano (${filme.ano}): `)) || filme.ano;
          const novaSinopse = await rl.question(`Nova sinopse: `) || filme.sinopse;
          const novaDuracao = parseInt(await rl.question(`Nova duração (${filme.duracaoemmin} min): `)) || filme.duracaoemmin;

          const filmeAtualizado = {
            id: filme.id,
            titulo: novoTitulo,
            genero: novoGenero,
            diretor: novoDiretor,
            ano: novoAno,
            sinopse: novaSinopse,
            duracaoemmin: novaDuracao,
          };

          const resultado = await WatchlistDAO.atualizar(filmeAtualizado);
          console.log("Filme atualizado com sucesso:", resultado);
        } catch (error) {
          console.error("Erro ao alterar filme:", error.message);
        }
        break;

      case "0":
        sair = true;
        console.log("Encerrando programa.");
        break;

      default:
        console.log("Opção inválida. Tente novamente.");
    }
  }

  rl.close();
}

main();
