using System;
using Contato.models;
using Microsoft.Data.Sqlite;
using Dapper;
using Contato.DAO;

// ContatoDAO daoContato = new ContatoDAO();
// Contatos obj = new Contatos
// {
//     Id = "",
//     Nome = "Ravier",
//     Email = "ravier@gmail.com"
// };

// daoContato.Inserir(obj);

// obj = daoContato.RetornarPorId(obj.Id);

// Console.WriteLine($"Inserido:{obj.Id} - {obj.Nome} - {obj.Email}");
// Console.WriteLine($"---------------------------------------------");

// var contatos = daoContato.RetornarTodos();

// foreach (var contato in contatos)
// {
//     Console.WriteLine($"{contato.Id} - {contato.Nome} - {contato.Email}");
// }


var p1 = new Produto
{
    Nome = "Coca-Cola",
    Quantidade = 10,
    Preco = 5.5
};

var p2 = new Produto
{
    Nome = "Papsi",
    Quantidade = 5,
    Preco = 5.0
};

var p3 = new Contatos
{
    Nome = "Arthur",
    Email = "arthur@gmail.com"
};

var dao = new ProdutoDAO();

var daoC = new ContatoDAO();
daoC.Inserir(p3);
dao.Inserir(p1);
dao.Inserir(p2);

Imprimir();

p2.Nome = "Pepsi";

dao.Alterar(p2);

Imprimir();

void Imprimir()
{
    foreach (var obj in dao.RetornarTodos())
        Console.WriteLine($"{obj.Id} - {obj.Nome} - {obj.Preco:N2} - {obj.Quantidade}");

    Console.WriteLine("--------------------------");
}


