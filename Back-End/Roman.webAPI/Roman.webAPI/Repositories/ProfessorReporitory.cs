using Roman.webAPI.Contexts;
using Roman.webAPI.Domains;
using Roman.webAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Roman.webAPI.Repositories
{
    public class ProfessorReporitory : IProfessorRepository
    {
        RomanContext ctx = new RomanContext();
        public void Atualizar(int id, Professor ProfessorAtualizado)
        {
            Professor professorBuscado = BuscarPorId(id);

            if (ProfessorAtualizado.IdUsuario != 0)
            {
                professorBuscado.IdUsuario = ProfessorAtualizado.IdUsuario;
            }

            if (ProfessorAtualizado.IdEquipe != 0)
            {
                professorBuscado.IdEquipe = ProfessorAtualizado.IdEquipe;
            }

            ctx.Professors.Update(professorBuscado);

            ctx.SaveChanges();
        }

        public Professor BuscarPorId(int id)
        {
            return ctx.Professors
             .FirstOrDefault(p => p.IdProfessor == id);
        }

        public void Cadastrar(Professor novoProfessor)
        {
            ctx.Professors.Add(novoProfessor);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            ctx.Professors.Remove(BuscarPorId(id));

            ctx.SaveChanges();
        }

        public List<Professor> Listar()
        {
            return ctx.Professors
              .ToList();
        }
    }
}
