using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.Sqlite;
using Dapper;
using Contato.models;
using System.Text;

namespace Contato.DAO;
public abstract class BaseDAO<T> where T : BaseModel
{

    public abstract string NomeTabela { get; }
    public abstract Mapa[] Mapas { get; }
    public void Inserir(T obj)
    {
        if (string.IsNullOrWhiteSpace(obj.Id))
            obj.Id = Guid.NewGuid().ToString();


        try
        {

            using (var conexao = new SqliteConnection("Data Source=C:\\Users\\Elton Oliveira\\Desktop\\4-Periodo-ADS\\PWA\\Contato\\db\\dados.db"))
            {
                conexao.Open();

                string sql = $"INSERT INTO {NomeTabela}" +
                                   $" (id{GetInsertNomes()})" +
                                   $" VALUES (@Id{GetInsertValues()})";

                conexao.Execute(sql,obj);
            }
        }
        catch (Exception ex)
        {
            ex.ToString();
        }
    }

    public void Alterar(T obj)
    {
        using (var conexao = new SqliteConnection("Data Source=db/dados.db"))
        {
            conexao.Open();

            string sql = $"UPDATE {NomeTabela}" +
               $" SET {GetUpdate()}" +
               " WHERE id = @Id";

            conexao.Execute(sql, obj);
        }
    }

    public void Excluir(string id)
    {
        using (var conexao = new SqliteConnection("Data Source=db/dados.db"))
        {
            conexao.Open();

            string sql = $"DELETE FROM {NomeTabela} WHERE id = @Id";

            conexao.Execute(sql, new { Id = id });
        }
    }

    public IList<T> RetornarTodos()
    {
        using (var conexao = new SqliteConnection("Data Source=db/dados.db"))
        {
            conexao.Open();

            string sql = $"SELECT * FROM {NomeTabela}" +
               " ORDER BY nome";

            var objetos = conexao.Query<T>(sql);

            return objetos.ToList();
        }
    }

    public T RetornarPorId(string id)
    {
        using (var conexao = new SqliteConnection("Data Source=db/dados.db"))
        {
            conexao.Open();

            string sql = $"SELECT * FROM {NomeTabela} WHERE id = @Id";

            var obj = conexao.QuerySingle<T>(sql, new { Id = id });

            return obj;
        }
    }
    private string GetInsertNomes()
    {
        var sb = new StringBuilder();

        foreach (var mapas in Mapas)
        {
            sb.Append($",{mapas.Campo}");
        }

        return sb.ToString();
    }

    private string GetInsertValues()
    {
        var sb = new StringBuilder();

        foreach (var mapas in Mapas)
        {
            sb.Append($",@{mapas.Propriedade}");
        }

        return sb.ToString();
    }

    private string GetUpdate()
    {
        var sb = new StringBuilder();

        foreach (var mapas in Mapas)
        {
            sb.Append($",{mapas.Campo}=@{mapas.Propriedade}");
        }

        return sb.ToString().Substring(1);
    }


}
public class Mapa
{
    public string Propriedade { get; set; } = "";
    public string Campo { get; set; } = "";
}


