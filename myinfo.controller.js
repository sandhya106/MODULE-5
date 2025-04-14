(function () {
    'use strict';
  
    angular.module('UserApp')
      .controller('MyInfoController', MyInfoController);
  
    MyInfoController.$inject = ['UserService'];
    function MyInfoController(UserService) {
      var myinfoCtrl = this;
      myinfoCtrl.user = UserService.getUser();
      myinfoCtrl.registered = !!myinfoCtrl.user;
    }
  })();
  