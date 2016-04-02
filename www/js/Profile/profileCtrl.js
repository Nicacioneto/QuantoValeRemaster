angular.module('starter')

.controller('profileCtrl', function($scope, factoryProfile) {

  factoryProfile.then(function(data) {
    console.log(data);
    $scope.user = data.data;
  })
});
