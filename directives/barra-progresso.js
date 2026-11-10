'use strict';

angular.module('agendaTech.diretivas').directive('barraProgresso', function () {
  return {
    restrict: 'E',
    scope: { valor: '<' },
    template: `
      <div class="progress-track" role="progressbar" aria-label="Progresso da inscrição"
        aria-valuemin="0" aria-valuemax="100" ng-attr-aria-valuenow="{{ valor }}">
        <div class="progress-fill" ng-style="{ width: valor + '%' }"
          ng-class="{ 'is-complete': valor === 100 }"></div>
      </div>
    `
  };
});
