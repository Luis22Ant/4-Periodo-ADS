using System;
using Contato.models;
using Microsoft.Data.Sqlite;
using Dapper;


Contatos obj = new Contatos
{
    Id = "10",
    Nome = "Pedro",
    Email = "pedro@gmail.com"
};

string connectionString = @"Data Source=db/dados.db";
string query = "INSERT INTO Contatos (Id, Nome, Email) VALUES (@Id, @Nome, @Email)";
// string queryUpdate = "UPDATE Contatos SET Nome = @Nome,Email = @Email WHERE Id = @Id";
// string queryDelete = "DELETE FROM Contatos";
// string queryDeleteFiltro = "DELETE FROM Contatos " +
// " WHERE Id = @Id";

try
{
    using (var conexao = new SqliteConnection(connectionString))
    {
        conexao.Open();
        conexao.Execute(query, obj);

        Console.WriteLine("Sucesso!");
    }
}
catch (Exception ex)
{
    Console.WriteLine("Erro : " + ex.ToString());
}

