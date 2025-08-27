CREATE TABLE watchlist (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    genero VARCHAR(100) NOT NULL,
    diretor VARCHAR(100) NOT NULL,
    ano INT NOT NULL,
    sinopse TEXT,
    duracaoEmMin INT NOT NULL
);

INSERT INTO watchlist (titulo, genero, diretor, ano, sinopse, duracaoEmMin)
VALUES
    ('Superman', 'Ação', 'James Gunn', 2025, 'Superman, um jornalista de Metrópolis, embarca em uma jornada para reconciliar sua herança kryptoniana com sua criação humana como Clark Kent.', 129),
    ('Pecadores', 'Ação', 'Ryan Coogler', 2025, 'Tentando deixar suas vidas problemáticas para trás, os irmãos gêmeos retornam à sua cidade natal para recomeçar, apenas para descobrir que um mal ainda maior está esperando para recebê-los de volta.', 137),
    ('Baby Driver', 'Ação', 'Edgar Wright', 2017, 'Depois de ser coagido a trabalhar para um chefão do crime, um jovem motorista de fuga se vê participando de um assalto fadado ao fracasso.', 115),
    ('Pantera Negra', 'Ficção Científica', 'Ryan Coogler', 2018, 'O Rei T Challa retorna para casa, na reclusa e tecnologicamente avançada nação africana de Wakanda, para servir como o novo líder de seu país. No entanto, T Challa logo descobre que está sendo desafiado ao trono por facções dentro e fora de seu próprio país. Usando poderes reservados aos reis wakandanos, T Challa assume o manto dos Panteras Negras para se juntar à ex-namorada Nakia, à rainha-mãe, à sua irmã-princesa, aos membros das Dora Milaje (as "forças especiais" wakandanas) e a um agente secreto americano, para impedir que Wakanda seja arrastada para uma guerra mundial .', 135),
    ('Anatomia de uma Queda', 'Thriller', 'Justine Triet', 2023, 'Uma mulher é suspeita do assassinato do marido, e seu filho cego enfrenta um dilema moral como única testemunha.', 150);

    