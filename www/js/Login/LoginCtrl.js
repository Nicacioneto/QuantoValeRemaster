angular.module('starter')

.controller('LoginCtrl', function($scope, $state, factoryLogin) {

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
        console.log(authData);
        var user = {
          name: authData.facebook.displayName,
          email: authData.facebook.email,
          score: '0',
          idFacebook: authData.facebook.id
        }
        factoryLogin.save(user);

        console.log("Authenticated successfully:", $scope.user);
        $state.go('app.login');
      }
    });
  }

  $scope.create = function(user) {
    var ref = new Firebase("https://firefacetest.firebaseio.com");

    ref.createUser({
      email: user.email,
      password: user.password
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
        alert(error, userData)
      } else {
        var user = {
          name: '',
          email: userData.email,
          score: '0',
          idFacebook: userData.uid
        }
        factoryLogin.save(user);
        console.log(userData)
      }
    });
  }


  $scope.loginEmail = function(user) {
    var ref = new Firebase("https://firefacetest.firebaseio.com");
    ref.authWithPassword({
      email: user.email,
      password: user.password
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
        alert(error, userData)
        console.log(userData);
      } else {
        console.log(userData);
      }
    });
  }

})
