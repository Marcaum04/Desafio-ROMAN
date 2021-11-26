using Roman.webAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Roman.webAPI.Interfaces
{
    interface ITemaRepository
    {
        List<Tema> Listar();

        Tema BuscarPorId(int id);

        void Cadastrar(Tema novoTema);

        void Atualizar(int id, Tema TemaAtualizado);

        void Deletar(int id);

    }
}
