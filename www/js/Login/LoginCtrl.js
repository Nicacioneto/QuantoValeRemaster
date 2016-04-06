angular.module('starter')

.controller('LoginCtrl', function($scope, $state, factoryLogin, factoryRegister, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk, $rootScope) {

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
        console.log("Login Failed!", error);
      } else {
        $rootScope.fblogged = true;
        $rootScope.logged = true;
        $rootScope.user = authData;
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
      console.log(user);
      },function(error){
        alert("Ocorreu um problema ou esse email já é cadastrado")
    });
  }


  $scope.loginEmail = function(user) {
    factoryLogin.get(user,function(user){
      $rootScope.user = user;
      console.log($rootScope.user);
      $state.go('app.profile');
      $rootScope.fblogged = false;
      $rootScope.logged = true;
    },function(error){
      console.log(error);
    })
  }

})
