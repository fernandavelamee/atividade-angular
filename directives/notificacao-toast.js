'use strict';

angular.module('agendaTech.diretivas').directive('notificacaoToast', ['ToastService', function (ToastService) {
  return {
    restrict: 'E',
    scope: {},
    template: `
      <div class="toast-area">
        <div class="sr-only" role="status" aria-atomic="true">{{ estado.mensagem }}</div>
        <div class="toast" ng-if="estado.mensagem" ng-class="'toast--' + estado.tipo">
          <span class="toast-icon" aria-hidden="true">{{ estado.tipo === 'sucesso' ? '✓' : 'i' }}</span>
          <p aria-hidden="true">{{ estado.mensagem }}</p>
          <button type="button" class="toast-close" aria-label="Fechar notificação" ng-click="fechar()">
            <span aria-hidden="true">×</span>
          </button>
        </div>
      </div>
    `,
    link: function (scope) {
      scope.estado = ToastService.estado;
      scope.fechar = ToastService.fechar;
    }
  };
}]);
