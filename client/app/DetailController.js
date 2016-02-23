angular.module('gServes')
  .controller('DetailController', DetailController)

DetailController.$inject = ['$scope', '$stateParams',]

function DetailController($scope, gService){
  console.log('hello from detail controller')
}
