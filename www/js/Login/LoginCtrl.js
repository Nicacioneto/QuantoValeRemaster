angular.module('starter')

.controller('HomeCtrl', function($scope, $state, factoryLogin, factoryRegister,
  $stateParams, serviceLogin, $timeout, ionicMaterialMotion, ionicMaterialInk,
  $rootScope, $ionicPopup, $ionicLoading) {
  $scope.$parent.clearFabs();
  $timeout(function() {
    $scope.$parent.hideHeader();
  }, 0);
  ionicMaterialInk.displayEffect();

  $scope.login = function() {
    $ionicLoading.show({
      template: 'Loading...'
    });
    var ref = new Firebase("https://firefacetest.firebaseio.com");

    ref.authWithOAuthPopup("facebook", function(error, authData) {
      $ionicLoading.hide();
      if (error) {
        console.log("Login Failed!", error);
        $ionicPopup.alert({
          title: 'Erro!',
          template: 'Login Falhou'
        });
      } else {
        $rootScope.fblogged = true;
        $rootScope.logged = true;
        console.log(authData);

        serviceLogin.setUser(
          authData.facebook.displayName,
          authData.facebook.email,
          0,
          authData.facebook.id
        );
        factoryRegister.save(serviceLogin.getUser());
        $state.go('app.profile');
        $rootScope.user = serviceLogin.getUser();
        console.log($rootScope.user);
      }
    });
  }

  $scope.create = function(user) {
    $ionicLoading.show({
      template: 'Loading...'
    });
    factoryRegister.save(user, function(user) {
      $ionicLoading.hide();
      $ionicPopup.alert({
        title: 'Sucesso!',
        template: 'Logado com sucesso!'
      });
      console.log(user);
    }, function(error) {
      $ionicLoading.hide();
      $ionicPopup.alert({
        title: 'Erro!',
        template: 'Cadastro falhou, verifique os dados ou se o email ja foi cadastrado'
      });
    });
  }

  $scope.logout = function(user) {
    $ionicLoading.show({
      template: 'Loading...'
    });
    serviceLogin.setUser(
      null,
      null,
      null,
      null
    );
    factoryRegister.save(serviceLogin.getUser());
    $rootScope.user = serviceLogin.getUser();
    console.log($rootScope.user);
    $state.go('app.home');
    $ionicLoading.hide();
    $rootScope.fblogged = false;
    $rootScope.logged = false;
  }

  $scope.loginEmail = function(user) {
    $ionicLoading.show({
      template: 'Loading...'
    });
    factoryLogin.get(user, function(user) {
      serviceLogin.setUser(
        user.name,
        user.email,
        user.score,
        user.token
      );
      factoryRegister.save(serviceLogin.getUser());
      $rootScope.user = serviceLogin.getUser();
      console.log($rootScope.user);
      $state.go('app.profile');
      $ionicLoading.hide();
      $rootScope.fblogged = false;
      $rootScope.logged = true;
    }, function(error) {
      $ionicLoading.hide();
      $ionicPopup.alert({
        title: 'Erro!',
        template: 'Login Falhou'
      });
    })
  }
})
