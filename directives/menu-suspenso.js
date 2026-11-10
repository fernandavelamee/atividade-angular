'use strict';

angular.module('agendaTech.diretivas').directive('menuSuspenso', ['$document', function ($document) {
  return {
    restrict: 'E',
    scope: {
      opcoes: '<',
      valor: '<',
      aoSelecionar: '&'
    },
    template: `
      <div class="dropdown" ng-keydown="fecharComEscape($event)">
        <button type="button" class="dropdown-trigger"
          ng-attr-aria-label="Categoria: {{ valor }}"
          ng-attr-aria-expanded="{{ aberto }}"
          ng-attr-aria-controls="{{ identificador }}"
          ng-click="aberto = !aberto">
          <span>{{ valor }}</span>
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="m4 6 4 4 4-4" stroke="currentColor" stroke-width="1.6"
              stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="dropdown-options" ng-attr-id="{{ identificador }}" ng-show="aberto">
          <button type="button" class="dropdown-option"
            ng-repeat="opcao in opcoes track by opcao"
            ng-attr-aria-pressed="{{ opcao === valor }}"
            ng-click="selecionar(opcao)">
            {{ opcao }}
          </button>
        </div>
      </div>
    `,
    link: function (scope, elemento) {
      scope.identificador = 'menu-' + scope.$id;
      scope.aberto = false;

      function fecharComFoco() {
        scope.aberto = false;
        elemento[0].querySelector('.dropdown-trigger').focus();
      }

      scope.selecionar = function (opcao) {
        scope.aoSelecionar({ opcao: opcao });
        fecharComFoco();
      };

      scope.fecharComEscape = function (evento) {
        if (evento.key === 'Escape' && scope.aberto) {
          evento.preventDefault();
          fecharComFoco();
        }
      };

      function fecharFora(evento) {
        if (scope.aberto && !elemento[0].contains(evento.target)) {
          scope.$evalAsync(function () {
            scope.aberto = false;
          });
        }
      }

      $document.on('click', fecharFora);
      scope.$on('$destroy', function () {
        $document.off('click', fecharFora);
      });
    }
  };
}]);
