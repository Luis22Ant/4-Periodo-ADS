using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.Sqlite;
using Dapper;
using Contato.models;

namespace Contato.DAO;

public class ContatoDAO : BaseDAO<Contatos>
{
    public override string NomeTabela => "Contatos";
    public override Mapa[] Mapas => new Mapa[]
    {
    new() {Campo = "nome",Propriedade = "Nome"},
    new() {Campo = "email",Propriedade = "Email"}
    };
}

