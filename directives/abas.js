'use strict';

angular.module('agendaTech.diretivas').directive('abasAgenda', function () {
  return {
    restrict: 'E',
    scope: { abas: '<' },
    template: `
      <div class="tab-list" role="tablist" aria-label="Sobre a agenda">
        <button class="tab-button" type="button" role="tab"
          ng-repeat="aba in abas track by $index"
          ng-attr-id="{{ identificador }}-botao-{{ $index }}"
          ng-attr-aria-controls="{{ identificador }}-painel-{{ $index }}"
          ng-attr-aria-selected="{{ ativa === $index }}"
          ng-attr-tabindex="{{ ativa === $index ? 0 : -1 }}"
          ng-click="selecionar($index)" ng-keydown="navegar($event, $index)">
          {{ aba.titulo }}
        </button>
      </div>
      <div class="tab-panel" role="tabpanel" tabindex="0"
        ng-repeat="aba in abas track by $index"
        ng-attr-id="{{ identificador }}-painel-{{ $index }}"
        ng-attr-aria-labelledby="{{ identificador }}-botao-{{ $index }}"
        ng-show="ativa === $index">
        <p>{{ aba.texto }}</p>
      </div>
    `,
    link: function (scope, elemento) {
      scope.identificador = 'abas-' + scope.$id;
      scope.ativa = 0;

      scope.selecionar = function (indice) {
        scope.ativa = indice;
      };

      scope.navegar = function (evento, indice) {
        const total = scope.abas.length;
        let destino;

        switch (evento.key) {
          case 'ArrowLeft':
            destino = (indice - 1 + total) % total;
            break;
          case 'ArrowRight':
            destino = (indice + 1) % total;
            break;
          case 'Home':
            destino = 0;
            break;
          case 'End':
            destino = total - 1;
            break;
          default:
            return;
        }

        evento.preventDefault();
        scope.selecionar(destino);
        elemento[0].querySelectorAll('[role="tab"]')[destino].focus();
      };
    }
  };
});
