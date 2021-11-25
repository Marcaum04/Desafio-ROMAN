CREATE DATABASE ROMAN_G1M;
GO

USE ROMAN_G1M
GO

CREATE TABLE Tema (
	idTema TINYINT PRIMARY KEY IDENTITY,
	nomeTema VARCHAR(100) NOT NULL
); 
GO

CREATE TABLE Equipe (
	idEquipe TINYINT PRIMARY KEY IDENTITY,
	nomeEquipe VARCHAR(100) NOT NULL
); 
GO

CREATE TABLE TipoUsuario (
	idTipoUsuario TINYINT PRIMARY KEY IDENTITY,
	nomeUsuario VARCHAR(100) NOT NULL
); 
GO

CREATE TABLE Usuario(
	idUsuario INT PRIMARY KEY IDENTITY,
	idTipoUsuario TINYINT FOREIGN KEY REFERENCES TipoUsuario(idTipoUsuario) NOT NULL,
	nome VARCHAR(100) NOT NULL,
	email VARCHAR(256) NOT NULL,
	senha VARCHAR(10) NOT NULL
);
GO

CREATE TABLE Professor (
	idProfessor INT PRIMARY KEY IDENTITY,
	idUsuario INT FOREIGN KEY REFERENCES Usuario(idUsuario) NOT NULL,
	idEquipe TINYINT FOREIGN KEY REFERENCES Equipe(idEquipe) NOT NULL
); 
GO

CREATE TABLE Projeto (
	idProjeto INT PRIMARY KEY IDENTITY,
	idTema TINYINT FOREIGN KEY REFERENCES Tema(idTema) NOT NULL,
	idUsuario INT FOREIGN KEY REFERENCES Usuario(idUsuario) NOT NULL,
	nomeProjeto VARCHAR(100),
	descricao VARCHAR(500)
);
GO