import { criarInterface } from "./src/utils/readlineInterface.js";
import { inserirFilme } from "./src/services/inserirFilme.js";
import { listarFilmes } from "./src/services/listarFilme.js";
import { deletarFilme } from "./src/services/deletarFilme.js";
import { filtrarGenero } from "./src/services/filtrarGenero.js";
import { filtrarDuracao } from "./src/services/filtrarDuracao.js";
import { alterarFilme } from "./src/services/alterarFilme.js";

async function main() {
  const rl = criarInterface();
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
    console.log("0 - Sair");

    const opcao = await rl.question("Opção: ");

    switch (opcao.trim()) {
      case "1":
        await inserirFilme(rl);
        break;
      case "2":
        await listarFilmes();
        break;
      case "3":
        await deletarFilme(rl);
        break;
      case "4":
        await filtrarGenero(rl);
        break;
      case "5":
        await filtrarDuracao(rl);
        break;
      case "6":
        await alterarFilme(rl);
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