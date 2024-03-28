using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Contato.models
{
    public class Produto : BaseModel
    {
        public string Nome { get; set; } = "";
        public double Preco { get; set; }
        public int Quantidade { get; set; }
    }
}