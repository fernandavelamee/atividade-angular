'use strict';

angular.module('agendaTech.servicos').factory('AgendaCatalogo', function () {
  const categorias = ['Todas', 'Oficina', 'Palestra', 'Networking'];

  const eventos = [
    {
      id: 1, titulo: 'IA na prática', categoria: 'Oficina',
      data: '2026-11-21T10:00:00-03:00', local: 'Comércio'
    },
    {
      id: 2, titulo: 'Design para produtos digitais', categoria: 'Palestra',
      data: '2026-11-21T14:00:00-03:00', local: 'Barra'
    },
    {
      id: 3, titulo: 'Café com devs', categoria: 'Networking',
      data: '2026-11-22T09:00:00-03:00', local: 'Rio Vermelho'
    },
    {
      id: 4, titulo: 'Git e GitHub do zero', categoria: 'Oficina',
      data: '2026-11-28T10:00:00-03:00', local: 'Comércio'
    },
    {
      id: 5, titulo: 'Dados para decisões', categoria: 'Palestra',
      data: '2026-11-28T15:00:00-03:00', local: 'Ondina'
    },
    {
      id: 6, titulo: 'Conexões de produto', categoria: 'Networking',
      data: '2026-11-29T10:00:00-03:00', local: 'Barra'
    },
    {
      id: 7, titulo: 'Front-end acessível', categoria: 'Oficina',
      data: '2026-12-05T09:00:00-03:00', local: 'Rio Vermelho'
    },
    {
      id: 8, titulo: 'Segurança no dia a dia', categoria: 'Palestra',
      data: '2026-12-05T14:00:00-03:00', local: 'Ondina'
    },
    {
      id: 9, titulo: 'Encontro de comunidades', categoria: 'Networking',
      data: '2026-12-06T10:00:00-03:00', local: 'Comércio'
    }
  ];

  function normalizar(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  }

  function filtrar(busca, categoria) {
    const termo = normalizar(busca);
    return eventos.filter(function (evento) {
      const formatoCorreto = categoria === 'Todas' || evento.categoria === categoria;
      const texto = normalizar(evento.titulo + ' ' + evento.local);
      return formatoCorreto && texto.includes(termo);
    });
  }

  return { categorias, filtrar };
});
