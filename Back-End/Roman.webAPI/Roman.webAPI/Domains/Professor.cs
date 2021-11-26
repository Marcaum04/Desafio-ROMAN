using System;
using System.Collections.Generic;

#nullable disable

namespace Roman.webAPI.Domains
{
    /// <summary>
    /// Classe que representa entidade (tabela) de Professores
    /// </summary>
    public partial class Professor
    {
        public int IdProfessor { get; set; }
        public int IdUsuario { get; set; }
        public byte IdEquipe { get; set; }

        public virtual Equipe IdEquipeNavigation { get; set; }
        public virtual Usuario IdUsuarioNavigation { get; set; }
    }
}
