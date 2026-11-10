'use strict';

angular.module('agendaTech.servicos', []);
angular.module('agendaTech.diretivas', ['agendaTech.servicos']);

angular.module('agendaTech', [
  'agendaTech.servicos',
  'agendaTech.diretivas'
]);
