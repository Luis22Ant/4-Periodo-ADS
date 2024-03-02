using System;
using Contato.models;
using Microsoft.Data.Sqlite;
using Dapper;


Contatos obj = new Contatos
{
    Id = "9",
    Nome = "Pedro",
    Email = "pedro@gmail.com"
};

string connectionString = @"Data Source=db/dados.db";
string query = "INSERT INTO Contatos (Id, Nome, Email) VALUES (@Id, @Nome, @Email)";

try
{
    using (var conexao = new SqliteConnection(connectionString))
    {
        conexao.Open();
        conexao.Execute(query, obj);

        Console.WriteLine("Inserido com sucesso!");
    }
}
catch (Exception ex)
{
    Console.WriteLine("Erro : " + ex.ToString());
}

