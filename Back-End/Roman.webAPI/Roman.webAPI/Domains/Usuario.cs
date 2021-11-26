using System;
using System.Collections.Generic;

#nullable disable

namespace Roman.webAPI.Domains
{
    /// <summary>
    /// Classe que representa entidade (tabela) de Usuarios
    /// </summary>
    public partial class Usuario
    {
        public Usuario()
        {
            Professors = new HashSet<Professor>();
            Projetos = new HashSet<Projeto>();
        }

        public int IdUsuario { get; set; }
        public byte IdTipoUsuario { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }

        public virtual TipoUsuario IdTipoUsuarioNavigation { get; set; }
        public virtual ICollection<Professor> Professors { get; set; }
        public virtual ICollection<Projeto> Projetos { get; set; }
    }
}
