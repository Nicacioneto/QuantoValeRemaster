angular.module('starter')

.controller('themeCtrl', function($scope, factoryRegister, serviceLogin, $rootScope, $state) {

  // Set Header
  $scope.$parent.showHeader();
  $scope.$parent.clearFabs();
  $scope.isExpanded = false;
  $scope.$parent.setExpanded(false);
  $scope.$parent.setHeaderFab(false);

});
