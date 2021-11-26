using Roman.webAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Roman.webAPI.Interfaces
{
    interface IProjetoRepository
    {
        List<Projeto> Listar();

        Projeto BuscarPorId(int id);

        void Cadastrar(Projeto novoProjeto);

        void Atualizar(int id, Projeto ProjetoAtualizado);

        void Deletar(int id);
    }
}
