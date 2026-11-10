'use strict';

angular.module('agendaTech.diretivas').directive('paginacaoAgenda', function () {
  return {
    restrict: 'E',
    scope: {
      total: '<',
      atual: '<',
      aoMudar: '&'
    },
    template: `
      <nav class="pagination" aria-label="Páginas da programação">
        <button type="button" class="page-control"
          ng-disabled="atual <= 1" ng-click="irPara(atual - 1)">
          Anterior
        </button>
        <div class="page-numbers">
          <button type="button" class="page-number"
            ng-repeat="numero in paginas track by numero"
            ng-attr-aria-label="Página {{ numero }}"
            ng-attr-aria-current="{{ numero === atual ? 'page' : undefined }}"
            ng-click="irPara(numero)">
            {{ numero }}
          </button>
        </div>
        <button type="button" class="page-control"
          ng-disabled="atual >= total" ng-click="irPara(atual + 1)">
          Próxima
        </button>
      </nav>
    `,
    link: function (scope) {
      scope.$watch('total', function (total) {
        scope.paginas = Array.from({ length: total }, function (_, indice) {
          return indice + 1;
        });
      });

      scope.irPara = function (pagina) {
        if (pagina >= 1 && pagina <= scope.total && pagina !== scope.atual) {
          scope.aoMudar({ pagina: pagina });
        }
      };
    }
  };
});
