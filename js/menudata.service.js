(function() {
    'use strict';
  
    angular.module('Data')
      .service('MenuDataService', MenuDataService);
  
    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {
      var service = this;
  
      service.getAllCategories = function() {
        return $http({
          method: 'GET',
          url: 'https://coursera-jhu-default-rtdb.firebaseio.com/categories.json'
        }).then(function(response) {
          return response.data;
        });
      };
  
      service.getItemsForCategory = function(categoryShortName) {
        return $http({
          method: 'GET',
          url: 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/' + categoryShortName + '.json'
        }).then(function(response) {
          return response.data;
        });
      };
    }
  })();
