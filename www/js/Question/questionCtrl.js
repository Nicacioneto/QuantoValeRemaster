angular.module('starter')

.controller('QuestionCtrl', function($scope, $state,factoryLogin, factoryRegister, factoryUpdateScore, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk, $rootScope) {

  // Set Header
  $scope.$parent.showHeader();
  $scope.$parent.clearFabs();
  $scope.isExpanded = false;
  $scope.$parent.setExpanded(false);
  $scope.$parent.setHeaderFab(false);


  $scope.update = function(user) {

    factoryUpdateScore.update(user,function(user){
        alert("Succes")
        console.log(user);
        },function(error){
          console.log("ERRO TA KI",user);
          alert("Erro ao atualizar")
      });
  }

})
