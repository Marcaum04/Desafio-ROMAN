using Roman.webAPI.Contexts;
using Roman.webAPI.Domains;
using Roman.webAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Roman.webAPI.Repositories
{
    public class TemaRepository : ITemaRepository
    {
        RomanContext ctx = new RomanContext();
        public void Atualizar(int id, Tema TemaAtualizado)
        {
            Tema temaBuscado = BuscarPorId(id);

            if (TemaAtualizado.NomeTema != null)
            {
                temaBuscado.NomeTema = TemaAtualizado.NomeTema;
            }

            ctx.Temas.Update(temaBuscado);

            ctx.SaveChanges();
        }

        public Tema BuscarPorId(int id)
        {
            return ctx.Temas
              .FirstOrDefault(t => t.IdTema == id);
        }

        public void Cadastrar(Tema novoTema)
        {
            ctx.Temas.Add(novoTema);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            ctx.Temas.Remove(BuscarPorId(id));

            ctx.SaveChanges();
        }

        public List<Tema> Listar()
        {
            return ctx.Temas
               .ToList();
        }
    }
}
