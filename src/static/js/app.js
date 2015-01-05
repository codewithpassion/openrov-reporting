var __index;
var __socket;
$(function() {
  __socket = io.connect();
  __index  = new Index(__socket);

});

angular.module('ReportingApp', [
  'ReportingApp.controllers',
  'ReportingApp.services',
  'ReportingApp.subModules',
  'ui.router'
])
  .config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/services');
  })
  .value('SocketAccess', function() { return __socket; });

