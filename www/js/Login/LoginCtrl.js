angular.module('starter')

.controller('LoginCtrl', function($scope) {
  $scope.login = function() {
    var ref = new Firebase("https://firefacetest.firebaseio.com");
    
    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully:", authData);
      }
    });
  }
})
