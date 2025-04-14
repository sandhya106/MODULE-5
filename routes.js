(function () {
    'use strict';
    
    angular.module('UserApp')
      .config(RoutesConfig);
  
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
      
      $urlRouterProvider.otherwise('/signup');
  
      $stateProvider
  
        .state('signup', {
          url: '/signup',
          template: `
            <h2>Sign Up for Our Newsletter!</h2>
            <form name="signupForm" novalidate ng-submit="signupCtrl.submit(signupForm)">
              <div>
                <label>First Name:</label>
                <input type="text" name="firstName" ng-model="signupCtrl.user.firstName" required />
                <span class="error-msg" ng-show="signupForm.firstName.$touched && signupForm.firstName.$invalid">Required</span>
              </div>
              <div>
                <label>Last Name:</label>
                <input type="text" name="lastName" ng-model="signupCtrl.user.lastName" required />
                <span class="error-msg" ng-show="signupForm.lastName.$touched && signupForm.lastName.$invalid">Required</span>
              </div>
              <div>
                <label>Email Address:</label>
                <input type="email" name="email" ng-model="signupCtrl.user.email" required />
                <span class="error-msg" ng-show="signupForm.email.$touched && signupForm.email.$invalid">Valid email required</span>
              </div>
              <div>
                <label>Phone Number:</label>
                <input type="tel" name="phone" ng-model="signupCtrl.user.phone" required />
                <span class="error-msg" ng-show="signupForm.phone.$touched && signupForm.phone.$invalid">Required</span>
              </div>
              <div>
                <label>Favorite Menu Item (e.g., L1):</label>
                <input type="text" name="favorite" ng-model="signupCtrl.user.favorite" required />
                <span class="error-msg" ng-show="signupCtrl.invalidFavorite">No such menu number exists</span>
              </div>
              <button type="submit" ng-disabled="signupForm.$invalid">Submit</button>
            </form>
            <div class="success-msg" ng-if="signupCtrl.saved">
              Your information has been saved.
            </div>
          `,
          controller: 'SignupController as signupCtrl'
        })
  
        .state('myinfo', {
          url: '/myinfo',
          template: `
            <h2>My Info</h2>
            <div ng-if="myinfoCtrl.registered">
              <p><strong>First Name:</strong> {{ myinfoCtrl.user.firstName }}</p>
              <p><strong>Last Name:</strong> {{ myinfoCtrl.user.lastName }}</p>
              <p><strong>Email:</strong> {{ myinfoCtrl.user.email }}</p>
              <p><strong>Phone:</strong> {{ myinfoCtrl.user.phone }}</p>
              <hr>
              <h3>Favorite Menu Item</h3>
              <div ng-if="myinfoCtrl.user.favoriteItem">
                <img ng-src="{{ myinfoCtrl.user.favoriteItem.image }}" alt="{{ myinfoCtrl.user.favoriteItem.name }}" style="width:200px; display:block; margin-bottom:1em;"/>
                <p><strong>{{ myinfoCtrl.user.favoriteItem.name }}</strong></p>
                <p>{{ myinfoCtrl.user.favoriteItem.description }}</p>
              </div>
            </div>
            <div ng-if="!myinfoCtrl.registered">
              Not Signed Up Yet. <a ui-sref="signup">Sign up Now!</a>
            </div>
          `,
          controller: 'MyInfoController as myinfoCtrl'
        });
    }
  })();
  