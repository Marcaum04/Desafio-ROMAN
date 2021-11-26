using System;
using System.Collections.Generic;

#nullable disable

namespace Roman.webAPI.Domains
{
    /// <summary>
    /// Classe que representa entidade (tabela) de Projetos
    /// </summary>
    public partial class Projeto
    {
        public int IdProjeto { get; set; }
        public byte IdTema { get; set; }
        public int IdUsuario { get; set; }
        public string NomeProjeto { get; set; }
        public string Descricao { get; set; }

        public virtual Tema IdTemaNavigation { get; set; }
        public virtual Usuario IdUsuarioNavigation { get; set; }
    }
}
