USE ROMAN_G1M
GO

INSERT INTO Tema(nomeTema)
VALUES ('Banco de dados'),('Back-end'),('UI/UX'),('Front-end'),('Mobile'),('NoSql')

INSERT INTO Equipe(nomeEquipe)
VALUES ('Desenvolvimento'), ('Redes'), ('Multimídia')

INSERT INTO TipoUsuario(nomeUsuario)
VALUES ('Adm'), ('Professor')

INSERT INTO Usuario(idTipoUsuario, nome, email, senha)
VALUES (1, 'Richard faz musse', 'adm@adm', 'adm'),
		(2, 'Saulo', 'saulinho@gmail.com', 'saulin'),
		(2, 'Lucas', 'luquinhas@gmail.com', 'luquin'),
		(2, 'Odirlei', 'odirlas@gmail.com', 'apaxe'),
		(2, 'Thiago', 'Thiaguindograu@gmail.com', 'paodequejo')

INSERT INTO Professor(idUsuario, idEquipe)
VALUES (2, 1), (3, 3), (4, 2), (5, 1)

INSERT INTO Projeto(idTema, idUsuario, nomeProjeto,descricao)
VALUES (1, 2, 'HROADS', 'O cliente HROADS deseja começar a construir o seu próprio jogo de RPG online.'), 
(2, 5, 'Rental', 'A empresa Rental solicitou que você crie a API que contém os dados de todos os seus clientes.'), 
(3, 3, 'Spmedical', 'A SP Medical Group é uma empresa que preza pela qualidade de seus serviços assim como a interface do usuário. E, hoje em dia, sabemos o quanto a interface como usuário é importante para que a experiência seja satisfatória em qualquer sistema.'), 
(4, 4, 'WishList', 'Então, você deverá desenvolver um projeto para cadastrar e listar todos os seus desejos! Quais? Os que você quiser. Foca nos objetivos e cadastre nesse sistema, pra conquista-los no futuro.'), 
(5, 5, 'NoSQLWOW', 'Faça um banco de dados não relacional para um banco que guarda dinheiros')
