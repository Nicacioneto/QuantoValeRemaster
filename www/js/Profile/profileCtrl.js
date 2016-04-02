angular.module('starter')

.controller('profileCtrl', function($scope, factoryProfile) {

  factoryProfile.then(function(data) {
    console.log("SAPORRA AQUI"+data);
    $scope.users = data;
  })
});
