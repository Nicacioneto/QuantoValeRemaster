angular.module('starter')

.controller('LoginCtrl', function($scope, $state) {
  $scope.login = function() {
    var ref = new Firebase("https://firefacetest.firebaseio.com");

    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        $scope.logged = function() {
                        return false;
                    }
        console.log("Login Failed!", error);
      } else {
        $scope.logged = function() {
                        return true;
                    }
        $scope.user = authData;
        console.log("Authenticated successfully:", $scope.user);
        $state.go('app.login');
      }
    });
  }
})
