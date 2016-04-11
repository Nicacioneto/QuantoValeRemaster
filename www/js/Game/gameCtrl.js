angular.module('starter')

.controller('gameCtrl', function($scope, serviceGame, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {

  var jump = 0;

  $scope.jump = function() {
    $scope.values = serviceGame.buttonPress().get();
  }

  $scope.jump_question = function() {
    $scope.values = serviceGame.buttonPress().get();
    jump += 1;
    console.log("JUMP == ", +jump)
    if ( jump > 3 ){
      alert("Você atingiu o limite máximo!");
    }
  }

  $scope.$parent.showHeader();
  $scope.$parent.clearFabs();
  $scope.isExpanded = true;
  $scope.$parent.setExpanded(true);
  $scope.$parent.setHeaderFab(false);

  // Activate ink for controller
  ionicMaterialInk.displayEffect();

  ionicMaterialMotion.pushDown({
    selector: '.push-down'
  });
  ionicMaterialMotion.fadeSlideInRight({
    selector: '.animate-fade-slide-in .item'
  });

})
