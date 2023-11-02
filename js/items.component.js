(function() {
    'use strict';
  
    angular.module('MenuApp')
      .component('items', {
        templateUrl: 'items.template.html',
        bindings: {
          items: '<',
          category: '<'
        }
      });
  
  })();
