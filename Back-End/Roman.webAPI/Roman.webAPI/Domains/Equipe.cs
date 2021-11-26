using System;
using System.Collections.Generic;

#nullable disable

namespace Roman.webAPI.Domains
{
    public partial class Equipe
    {
        /// <summary>
        /// Classe que representa entidade (tabela) de Equipes
        /// </summary>
        public Equipe()
        {
            Professors = new HashSet<Professor>();
        }

        public byte IdEquipe { get; set; }
        public string NomeEquipe { get; set; }

        public virtual ICollection<Professor> Professors { get; set; }
    }
}
