angular.module('starter')

.controller('ResetPasswordCtrl', function($scope, factoryResetPassword,
  $ionicPopup) {

  $scope.resetPassword = function(user) {
    factoryResetPassword.save(user, function(user) {
      $ionicPopup.alert({
        title: 'Atenção!',
        template: 'Foi enviado um código para o seu email!'
      });
      console.log(user);

    }, function(error) {
      $ionicPopup.alert({
        title: 'Erro!',
        template: 'Email invalido, verifique os dados ou se o email já foi cadastrado'
      });
    });
  }

})
