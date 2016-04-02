angular.module('starter')

.controller('LoginCtrl', function($scope, $state, factoryLogin, factoryRegister, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {

  // Set Header
$scope.$parent.showHeader();
$scope.$parent.clearFabs();
$scope.isExpanded = false;
$scope.$parent.setExpanded(false);
$scope.$parent.setHeaderFab(false);


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
        factoryRegister.save(user);

        console.log("Authenticated successfully:", $scope.user);
        $state.go('app.profile');
      }
    });
  }

  $scope.create = function(user) {

  factoryRegister.save(user,function(user){
      alert("Succes")
      },function(error){
        alert("Ocorreu um problema ou esse email já é cadastrado")
    });
  }


  $scope.loginEmail = function(user) {
    factoryLogin.get(user,function(){
          alert("login")
      },function(){
          alert("Erro")
      })
  }

})
