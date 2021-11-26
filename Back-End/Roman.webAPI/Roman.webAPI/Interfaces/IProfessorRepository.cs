using Roman.webAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Roman.webAPI.Interfaces
{
    interface IProfessorRepository
    {
        List<Professor> Listar();

        Professor BuscarPorId(int id);

        void Cadastrar(Professor novoProfessor);

        void Atualizar(int id, Professor ProfessorAtualizado);

        void Deletar(int id);
    }
}
