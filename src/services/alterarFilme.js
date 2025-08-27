import { WatchlistDAO } from "../dao/WatchlistDAO.js";

export async function alterarFilme(rl) {
  const id = parseInt(await rl.question("Digite o ID do filme a alterar: "));

  try {
    const filmes = await WatchlistDAO.listar();
    const filme = filmes.find(f => f.id === id);

    if (!filme) {
      console.log("Filme não encontrado.");
      return;
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
}