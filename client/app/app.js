angular.module('gServes', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    console.log("Hello from Angular")

    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home', {
      templateUrl: 'templates/home.html',
      controller: 'OverviewController',
      url: '/home'
    }).state('detail', {
      templateUrl: 'templates/detail.html',
      controller: 'DetailController',
      url: '/detail'
    }).state('settings', {
      templateUrl: 'templates/settings.html',
      controller: 'SettingsController',
      url: '/settings'
    })
  });
