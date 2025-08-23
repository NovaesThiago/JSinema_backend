import pool from "./db.js";

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

      const resultado = await pool.query(sql, values);
      return resultado.rows[0];
    } catch (error) {
      console.error("Erro ao inserir filme: ", error.message);
      throw error;
    }
  }

  static async listar() {
    try {
      const sql = "SELECT * FROM watchlist";
      const resultado = await pool.query(sql);
      return resultado.rows;
    } catch (error) {
      console.error("Erro ao listar filmes: ", error.message);
      throw error;
    }
  }

  static async deletar(id) {
    try {
      const sql = "DELETE FROM watchlist WHERE id = $1 RETURNING *";
      const values = [id];
      const resultado = await pool.query(sql, values);
      return resultado.rows[0];
    } catch (error) {
      console.error("Erro ao deletar filme: ", error.message);
      throw error;
    }
  }
}
