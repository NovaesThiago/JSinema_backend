import { WatchlistDAO } from "../dao/WatchlistDAO.js";

export async function filtrarGenero(rl) {
  const genero = await rl.question("Digite o gênero para filtrar: ");

  try {
    const filmes = await WatchlistDAO.listar();
    const filtrados = filmes.filter(f => f.genero.toLowerCase() === genero.toLowerCase());

    if (filtrados.length === 0) {
      console.log("Nenhum filme encontrado com esse gênero.");
    } else {
      console.log("\nFilmes encontrados:");
      filtrados.forEach(f => console.log(`${f.id} - ${f.titulo} (${f.genero})`));
    }
  } catch (error) {
    console.error("Erro ao filtrar por gênero:", error.message);
  }
}