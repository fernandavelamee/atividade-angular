'use strict';

angular.module('agendaTech.diretivas').directive('acordeaoAgenda', function () {
  return {
    restrict: 'E',
    scope: { itens: '<' },
    template: `
      <div class="accordion-item" ng-repeat="item in itens track by $index">
        <h3 class="accordion-heading">
          <button class="accordion-trigger" type="button"
            ng-attr-id="{{ identificador }}-botao-{{ $index }}"
            ng-attr-aria-controls="{{ identificador }}-painel-{{ $index }}"
            ng-attr-aria-expanded="{{ aberto === $index }}"
            ng-click="alternar($index)">
            <span>{{ item.titulo }}</span>
            <span class="accordion-icon" aria-hidden="true"></span>
          </button>
        </h3>
        <div class="accordion-panel" role="region"
          ng-attr-id="{{ identificador }}-painel-{{ $index }}"
          ng-attr-aria-labelledby="{{ identificador }}-botao-{{ $index }}"
          ng-class="{ 'is-open': aberto === $index }"
          ng-attr-aria-hidden="{{ aberto !== $index }}">
          <div class="accordion-inner"><p>{{ item.texto }}</p></div>
        </div>
      </div>
    `,
    link: function (scope) {
      scope.identificador = 'acordeao-' + scope.$id;
      scope.aberto = null;

      scope.alternar = function (indice) {
        scope.aberto = scope.aberto === indice ? null : indice;
      };
    }
  };
});
