import { WatchlistDAO } from "../dao/WatchlistDAO.js";

export async function inserirFilme(rl) {
  const titulo = await rl.question("\nTítulo: ");
  const genero = await rl.question("Gênero: ");
  const diretor = await rl.question("Diretor: ");
  const ano = parseInt(await rl.question("Ano: "));
  const sinopse = await rl.question("Sinopse: ");
  const duracaoemmin = parseInt(await rl.question("Duração (min): "));

  const novoFilme = { titulo, genero, diretor, ano, sinopse, duracaoemmin };

  try {
    const filmeInserido = await WatchlistDAO.inserir(novoFilme);
    console.log("Filme inserido com sucesso:", filmeInserido);
  } catch (error) {
    console.error("Erro ao inserir filme:", error.message);
  }
}