(function() {
    'use strict';
  
    angular.module('MenuApp')
      .config(RoutesConfig);
  
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
  
      $stateProvider
        .state('home', {
          url: '/',
          template: '<div class="container p-5 text-center"><h2>WELCOME TO OUR RESTAURANT</h2><a ui-sref="categories">View list of categories</a></div>'
        })
        .state('categories', {
          url: '/categories',
          template: '<categories categories="$resolve.categories"></categories>',
          resolve: {
            categories: ['MenuDataService', function(MenuDataService) {
              return MenuDataService.getAllCategories();
            }]
          }
        })
        .state('items', {
          url: '/items/{categoryShortName}',
          template: '<items items="$resolve.items"></items>',
          resolve: {
            items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
            }]
          }
        });
    }
  
  })();
