(function() {
    'use strict';
  
    angular.module('MenuApp')
      .component('categories', {
        templateUrl: 'categories.template.html',
        bindings: {
          categories: '<'
        }
      });
  
  })();
