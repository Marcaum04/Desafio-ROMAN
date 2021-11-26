using System;
using System.Collections.Generic;

#nullable disable

namespace Roman.webAPI.Domains
{
    /// <summary>
    /// Classe que representa entidade (tabela) de Temas
    /// </summary>
    public partial class Tema
    {
        public Tema()
        {
            Projetos = new HashSet<Projeto>();
        }

        public byte IdTema { get; set; }
        public string NomeTema { get; set; }

        public virtual ICollection<Projeto> Projetos { get; set; }
    }
}
