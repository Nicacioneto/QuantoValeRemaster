angular.module('starter')

.controller('SignupCtrl', function($scope, $state, factoryLogin, factoryRegister,
  serviceLogin, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,
  $rootScope, $ionicPopup) {

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
        $ionicPopup.alert({
          title: 'Erro!',
          template: 'Login Falhou'
        });
      } else {
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

    factoryRegister.save(user, function(user) {
      $ionicPopup.alert({
        title: 'Confirmado!',
        template: 'Cadastrado com sucesso!'
      });
      console.log(user);
    }, function(error) {
      $ionicPopup.alert({
        title: 'Erro!',
        template: 'Cadastro falhou, verifique os dados ou se o email ja foi cadastrado'
      });
    });
  }

  $scope.loginEmail = function(user) {
    factoryLogin.get(user, function(user) {
      $rootScope.user = user;
      console.log($rootScope.user);
      $state.go('app.profile');
      $rootScope.fblogged = false;
      $rootScope.logged = true;
    }, function(error) {
      $ionicPopup.alert({
        title: 'Erro!',
        template: 'Login Falhou'
      });
    })
  }

})
