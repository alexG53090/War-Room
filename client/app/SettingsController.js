angular.module('gServes')
  .controller('SettingsController', SettingsController)

SettingsController.$inject = ['$scope'];

function SettingsController($scope, gService){
  console.log('hello from settings controller')
}
