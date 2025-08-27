import { WatchlistDAO } from "../dao/WatchlistDAO.js";

export async function deletarFilme(rl) {
  const id = parseInt(await rl.question("Digite o ID do filme a deletar: "));

  try {
    const deletado = await WatchlistDAO.deletar(id);

    if (deletado) {
      console.log(`Filme "${deletado.titulo}" deletado com sucesso!`);
    } else {
      console.log("Nenhum filme encontrado com esse ID.");
    }
  } catch (error) {
    console.error("Erro ao deletar filme:", error.message);
  }
}