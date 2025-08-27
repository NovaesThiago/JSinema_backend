import pool from "../db/db.js";

export class WatchlistDAO {
  static async inserir(filme) {
    try {
      const sql = `INSERT INTO watchlist (titulo, genero, diretor, ano, sinopse, duracaoemmin) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;

      const values = [
        filme.titulo,
        filme.genero,
        filme.diretor,
        filme.ano,
        filme.sinopse,
        filme.duracaoemmin,
      ];

      return (await pool.query(sql, values)).rows[0];
    } catch (error) {
      console.error("Erro ao inserir filme: ", error.message);
      throw error;
    }
  }

  static async listar() {
    try {
      const sql = "SELECT * FROM watchlist";
      return (await pool.query(sql)).rows;
    } catch (error) {
      console.error("Erro ao listar filmes: ", error.message);
      throw error;
    }
  }

  static async deletar(id) {
    try {
      const sql = "DELETE FROM watchlist WHERE id = $1 RETURNING *";
      const values = [id];
      return (await pool.query(sql, values)).rows[0];
    } catch (error) {
      console.error("Erro ao deletar filme: ", error.message);
      throw error;
    }
  }

  static async filtrarGenero(genero) {
    try {
      const sql = "SELECT * FROM filmes WHERE genero = $1";
      const resultado = await pool.query(sql, [genero]);
      return resultado.rows;
    } catch (error) {
      console.error("Erro ao filtrar por gênero: ", error.message);
      throw error;
    }
  }  
 
  static async filtrarDuracao(min, max) {
    try {
      const sql = "SELECT * FROM filmes WHERE duracao BETWEEN $1 AND $2";
      const resultado = await pool.query(sql, [min, max]);
      return resultado.rows;
    } catch (error) {
      console.error("Erro ao filtrar por duração: ", error.message);
      throw error;
    }
  }

  static async alterarFilmes(filme) {
    try {
      const sql = `
        UPDATE filmes
        SET titulo = $1, genero = $2, duracao = $3
        WHERE id = $4
      `;
      const valores = [filme.titulo, filme.genero, filme.duracao, filme.id];
      await pool.query(sql, valores);
    } catch (error) {
      console.error("Erro ao alterar filme: ", error.message);
      throw error;
    }
  }
}

