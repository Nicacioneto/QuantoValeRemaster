angular.module('starter')

.controller('LoginCtrl', function($scope, $state, factoryLogin, factoryRegister) {

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
        $scope.fblogged = function(){
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
        factoryRegister.save(user);

        console.log("Authenticated successfully:", $scope.user);
        $state.go('app.login');
      }
    });
  }

  $scope.create = function(user) {

  factoryRegister.save(user,function(user){
      alert("Succes")
      console.log(user);
      },function(error){
        alert("Ocorreu um problema ou esse email já é cadastrado")
    });
  }


  $scope.loginEmail = function(user) {
    factoryLogin.get(user,function(user){
      $scope.user = user;
      console.log($scope.user);
      $scope.logged = function() {
        return true;
      }
      $scope.fblogged = function(){
        return false;
      }
    },function(){
        $scope.logged = function() {
          return false;
        }
    })
  }

})
