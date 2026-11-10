'use strict';

angular.module('agendaTech.servicos').service('ToastService', ['$timeout', function ($timeout) {
  const estado = { mensagem: '', tipo: 'info' };
  let temporizador;

  this.estado = estado;
  this.fechar = fechar;

  this.mostrar = function (mensagem, tipo) {
    fechar();
    estado.mensagem = mensagem;
    estado.tipo = tipo;
    temporizador = $timeout(function () {
      estado.mensagem = '';
      temporizador = null;
    }, 5000);
  };

  function fechar() {
    if (temporizador) {
      $timeout.cancel(temporizador);
      temporizador = null;
    }
    estado.mensagem = '';
  }
}]);
