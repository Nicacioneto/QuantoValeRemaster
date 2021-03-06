angular.module('starter')

.controller('ResetPasswordCtrl', function($scope, factoryResetPassword,
  factoryResetPasswordKeyEnter, $ionicPopup, $state, serviceResetPassword,
  factoryResetPasswordEdit, $rootScope, $ionicLoading) {

  // Set Header
  $scope.$parent.showHeader();
  $scope.$parent.clearFabs();
  $scope.isExpanded = false;
  $scope.$parent.setExpanded(false);
  $scope.$parent.setHeaderFab(false);

  $scope.resetPassword = function(user) {
    $ionicLoading.show({
      template: 'Loading...'
    });
    factoryResetPassword.save(user, function(user) {
      $ionicLoading.hide();
      $ionicPopup.alert({
        title: 'Atenção!',
        template: 'Foi enviado um código para o seu email!'
      });
      console.log(user);
      $state.go('app.resetkeyenter');
    }, function(error) {
      $ionicLoading.hide();
      $ionicPopup.alert({
        title: 'Erro!',
        template: 'Email invalido, verifique os dados ou se o email já foi cadastrado'
      });
    });
  }

  $scope.resetPasswordKeyEnter = function(user) {
    $ionicLoading.show({
      template: 'Loading...'
    });
    factoryResetPasswordKeyEnter.get(user, function(user) {
      $ionicLoading.hide();
      $ionicPopup.alert({
        title: 'Atenção!',
        template: 'Chave confirmada!'
      });
      serviceResetPassword.setUser(
        user.password_reset_key,
        null,
        null
      );
      $rootScope.user = serviceResetPassword.getUser();
      console.log("User", serviceResetPassword.getUser());
      $state.go('app.resetedit');
    }, function(error) {
      $ionicLoading.hide();
      $ionicPopup.alert({
        title: 'Erro!',
        template: 'Chave expirada ou invalida!'
      });
    });
  }

  $scope.resetPasswordEdit = function(user) {
    $ionicLoading.show({
      template: 'Loading...'
    });
    serviceResetPassword.setUser(
      $rootScope.user.password_reset_key,
      user.password,
      user.password_confirmation
    );
    $rootScope.user = serviceResetPassword.getUser();

    factoryResetPasswordEdit.update({
      key: user.password_reset_key
    }, {
      user: $rootScope.user
    }, function(user) {
      $ionicLoading.hide();
      $ionicPopup.alert({
        title: 'Atenção!',
        template: 'Troca de Senha efetuada!'
      });
      $state.go('app.home');
    }, function(error) {
      $ionicLoading.hide();
      $ionicPopup.alert({
        title: 'Erro!',
        template: 'Senha invalida!'
      });
    });
  }

})
