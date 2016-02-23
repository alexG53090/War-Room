angular.module('gServes')
  .controller('OverviewController', OverviewController)

OverviewController.$inject = ['$scope'];

function OverviewController($scope, gService){
  console.log('hello from overview controller')
}
