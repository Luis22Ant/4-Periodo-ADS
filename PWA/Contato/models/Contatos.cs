using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Contato.models
{
    public class Contatos : BaseModel
    {
        public string Nome { get; set; } = "";
        public string Email { get; set; } = "";
    }
}