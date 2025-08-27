import { WatchlistDAO } from "../dao/WatchlistDAO.js";

export async function listarFilmes() {
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
}