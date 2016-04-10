angular.module('starter')

.controller('profileCtrl', function($scope, factoryRegister, serviceLogin, $rootScope, $state) {

  // Set Header
  $scope.$parent.showHeader();
  $scope.$parent.clearFabs();
  $scope.isExpanded = false;
  $scope.$parent.setExpanded(false);
  $scope.$parent.setHeaderFab(false);

  $scope.logout = function(user) {
    serviceLogin.setUser(
      null,
      null,
      0,
      null
    );
    factoryRegister.save(serviceLogin.getUser());
    $rootScope.user = serviceLogin.getUser();
    console.log($rootScope.user);
    $state.go('app.home');
    $rootScope.fblogged = false;
    $rootScope.logged = false;
  }

});
