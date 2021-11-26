using Microsoft.EntityFrameworkCore;
using Roman.webAPI.Contexts;
using Roman.webAPI.Domains;
using Roman.webAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Roman.webAPI.Repositories
{
    public class ProjetoReporitory : IProjetoRepository
    {
        RomanContext ctx = new RomanContext();
        public void Atualizar(int id, Projeto ProjetoAtualizado)
        {
            Projeto projetoBuscado = BuscarPorId(id);

            if (ProjetoAtualizado.NomeProjeto != null)
            {
                projetoBuscado.NomeProjeto = ProjetoAtualizado.NomeProjeto;
            }

            if (ProjetoAtualizado.Descricao != null)
            {
                projetoBuscado.Descricao = ProjetoAtualizado.Descricao;
            }

            if (ProjetoAtualizado.IdUsuario != 0)
            {
                projetoBuscado.IdUsuario = ProjetoAtualizado.IdUsuario;
            }

            if (ProjetoAtualizado.IdTema != 0)
            {
                projetoBuscado.IdTema = ProjetoAtualizado.IdTema;
            }

            ctx.Projetos.Update(projetoBuscado);

            ctx.SaveChanges();
        }

        public Projeto BuscarPorId(int id)
        {
            return ctx.Projetos
               .Include(t => t.IdTemaNavigation)
               .Include(u => u.IdUsuarioNavigation)
               .FirstOrDefault(p => p.IdProjeto == id);
        }

        public void Cadastrar(Projeto novoProjeto)
        {
            ctx.Projetos.Add(novoProjeto);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            ctx.Projetos.Remove(BuscarPorId(id));

            ctx.SaveChanges();
        }

        public List<Projeto> Listar()
        {
            return ctx.Projetos
                .Include(t => t.IdTemaNavigation)
                .Include(u => u.IdUsuarioNavigation)
                .ToList();
        }
    }
}
