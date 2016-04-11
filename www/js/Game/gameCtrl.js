angular.module('starter')

.controller('gameCtrl', function($scope, serviceGame, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion, $ionicPopup) {

  var jump = 0;

  $scope.jump = function() {
    $scope.values = serviceGame.buttonPress().get();
  }

  $scope.jump_question = function() {
    $scope.values = serviceGame.buttonPress().get();
    jump += 1;
    console.log("JUMP == ", +jump);
    if (jump > 3) {
      jump = 0;
      var confirmPopup = $ionicPopup.confirm({
        title: 'Você atingiu o limite máximo de pular questões!'
      });
    }
  }

  $scope.end_game = function(){
    var confirmPopup = $ionicPopup.confirm({
      title: 'Fim da partida',
      template: 'Deseja realmente encerrar a partida?'
    });

    confirmPopup.then(function(answer){

        if (answer){
          console.log("Encerrar");
        }
        else {
          console.log("Cancelar Encerramento");
        }
    })
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
