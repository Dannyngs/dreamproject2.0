(function() {
  'use strict';

  angular
    .module('dreamproject20')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
    .state('about', {
        url: '/about',
        templateUrl: 'app/main/about.html'
       
      })
    .state('contact', {
        url: '/contact',
        templateUrl: 'app/main/contact.html'
       
      })
     .state('app', {
        url: '/app',
        templateUrl: 'app/main/app.html'
       
      });

    $urlRouterProvider.otherwise('/');
  }

})();
