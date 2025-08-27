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
    console.log("4 - Sair");

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
        sair = true;
        console.log("Encerrando programa.");
        break;

      case "5":
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
        
      

      default:
        console.log("Opção inválida. Tente novamente.");
    }
  }

  rl.close();
}

main();
