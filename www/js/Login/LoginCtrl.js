angular.module('starter')

.controller('LoginCtrl', function($scope, $state, factoryLogin, factoryRegister,serviceLogin,$stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk, $rootScope) {

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
      }

      else {
        $rootScope.fblogged = true;
        $rootScope.logged = true;
        $rootScope.user = authData;
        console.log(authData);

        var user = {
          name: authData.facebook.displayName,
          email: authData.facebook.email,
          score: '0',
          idFacebook: authData.facebook.id,
          password: authData.facebook.id,
          password_confirmation: authData.facebook.id
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

.controller('HomeCtrl', function($scope, $state, factoryLogin, factoryRegister, $stateParams, serviceLogin,$timeout, ionicMaterialMotion, ionicMaterialInk, $rootScope) {
    $scope.$parent.clearFabs();
    $timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);
    ionicMaterialInk.displayEffect();

    $scope.login = function() {
      var ref = new Firebase("https://firefacetest.firebaseio.com");

      ref.authWithOAuthPopup("facebook", function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        }

        else {
          $rootScope.fblogged = true;
          $rootScope.logged = true;
          $rootScope.user = authData;

          serviceLogin.setUser(
            authData.facebook.name,
            authData.facebook.email,
            0,
            authData.facebook.id
          );
          factoryRegister.save(serviceLogin.getUser());
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
