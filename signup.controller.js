(function () {
    'use strict';
  
    angular.module('UserApp')
      .service('UserService', UserService);
  
    UserService.$inject = ['$http'];
    function UserService($http) {
      var service = this;
  
      // Holds the saved user info.
      service.user = null;
  
      // Save the user info.
      service.saveUser = function (userData) {
        service.user = userData;
      };
  
      // Retrieve the saved user info.
      service.getUser = function () {
        return service.user;
      };
  
      // Lookup favorite menu item.
      service.getFavoriteItem = function (favInput) {
        // Expecting input like "L1" (first character is category, rest is number).
        if (!favInput || favInput.length < 2) {
          return null;
        }
        var category = favInput.charAt(0).toUpperCase();
        // Convert the remainder to number then subtract 1 for zero-based index
        var numPortion = parseInt(favInput.slice(1), 10);
        if (isNaN(numPortion) || numPortion < 1) {
          return null;
        }
        var index = numPortion - 1;
        var url = 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/' + category + '/menu_items/' + index + '.json';
        return $http({
          method: 'GET',
          url: url
        }).then(function (response) {
          return response.data; // If null, item does not exist.
        });
      };
    }
  })();
  