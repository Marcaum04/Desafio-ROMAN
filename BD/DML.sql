USE ROMAN_G1M
GO

INSERT INTO Tema(nomeTema)
VALUES ('Banco de dados'),('Back-end'),('UI/UX'),('Front-end'),('Mobile'),('NoSql')

INSERT INTO Equipe(nomeEquipe)
VALUES ('Desenvolvimento'), ('Redes'), ('Multim�dia')

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
VALUES (1, 2, 'HROADS', 'O cliente HROADS deseja come�ar a construir o seu pr�prio jogo de RPG online.'), 
(2, 5, 'Rental', 'A empresa Rental solicitou que voc� crie a API que cont�m os dados de todos os seus clientes.'), 
(3, 3, 'Spmedical', 'A SP Medical Group � uma empresa que preza pela qualidade de seus servi�os assim como a interface do usu�rio. E, hoje em dia, sabemos o quanto a interface como usu�rio � importante para que a experi�ncia seja satisfat�ria em qualquer sistema.'), 
(4, 4, 'WishList', 'Ent�o, voc� dever� desenvolver um projeto para cadastrar e listar todos os seus desejos! Quais? Os que voc� quiser. Foca nos objetivos e cadastre nesse sistema, pra conquista-los no futuro.'), 
(5, 5, 'NoSQLWOW', 'Fa�a um banco de dados n�o relacional para um banco que guarda dinheiros')
