'use strict';

angular.module('agendaTech').controller('AgendaController', [
  '$scope', 'AgendaCatalogo', 'ToastService',
  function ($scope, AgendaCatalogo, ToastService) {
    $scope.busca = '';
    $scope.categorias = AgendaCatalogo.categorias;
    $scope.categoria = $scope.categorias[0];
    $scope.tamanhoPagina = 3;
    $scope.progresso = 0;
    $scope.eventoSelecionado = null;

    $scope.abasSobre = [
      {
        titulo: 'Sobre',
        texto: 'A Agenda Tech Salvador reúne exemplos de oficinas, palestras e encontros de comunidade em uma programação de tecnologia.'
      },
      {
        titulo: 'Participação',
        texto: 'Escolha um evento na programação e confirme na seção de inscrição. Você pode reiniciar o fluxo para testar outra atividade.'
      },
      {
        titulo: 'Local',
        texto: 'As atividades fictícias estão distribuídas pelo Comércio, pela Barra, por Ondina e pelo Rio Vermelho, em Salvador.'
      }
    ];

    $scope.perguntas = [
      {
        titulo: 'Os eventos são reais?',
        texto: 'Os eventos e os horários são fictícios e servem para demonstrar a aplicação.'
      },
      {
        titulo: 'Como vejo outros eventos?',
        texto: 'Use os números da paginação ou os botões Anterior e Próxima. A busca por nome ou local pode ser combinada com o filtro de categoria.'
      },
      {
        titulo: 'Como troco o evento selecionado?',
        texto: 'Selecione outro evento na programação ou use Reiniciar na seção de inscrição. Cada seleção inicia uma nova simulação.'
      }
    ];

    $scope.atualizarLista = function () {
      $scope.eventos = AgendaCatalogo.filtrar($scope.busca, $scope.categoria);
      $scope.totalPaginas = Math.ceil($scope.eventos.length / $scope.tamanhoPagina);
      $scope.pagina = 1;
    };

    $scope.alterarCategoria = function (categoria) {
      $scope.categoria = categoria;
      $scope.atualizarLista();
    };

    $scope.mudarPagina = function (pagina) {
      $scope.pagina = pagina;
    };

    $scope.selecionarEvento = function (evento) {
      if ($scope.eventoSelecionado === evento) return;

      $scope.eventoSelecionado = evento;
      $scope.progresso = 50;
      ToastService.mostrar('Evento selecionado. Confirme na seção de inscrição.', 'info');
    };

    $scope.confirmarInscricao = function () {
      if ($scope.progresso !== 50) return;

      $scope.progresso = 100;
      ToastService.mostrar('Inscrição simulada confirmada!', 'sucesso');
    };

    $scope.reiniciarInscricao = function () {
      $scope.eventoSelecionado = null;
      $scope.progresso = 0;
      ToastService.fechar();
    };

    $scope.atualizarLista();
  }
]);
