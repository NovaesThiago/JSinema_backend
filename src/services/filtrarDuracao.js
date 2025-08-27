import { WatchlistDAO } from "../dao/WatchlistDAO.js";

export async function filtrarDuracao(rl) {
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
}