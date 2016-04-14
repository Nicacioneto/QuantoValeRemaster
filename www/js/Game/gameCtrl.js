angular.module('starter')

.controller('gameCtrl', function($scope, serviceGame, $stateParams, $timeout,
  ionicMaterialInk, ionicMaterialMotion, $ionicPopup, factoryUpdateScore,
  ScoreEntry, $rootScope, serviceUpdateScore, serviceLogin, $ionicLoading,
  factoryUpdateScore, $state) {

  var jump = 0;
  var total = 0;
  $rootScope.scoreTotal = 0;
  $scope.answered = 0;

  $scope.start = function() {
    var score = ScoreEntry.resetScore();
    var answerTrue = ScoreEntry.resetTrue();
    var answer = ScoreEntry.resetAnswer();
    var pular = ScoreEntry.jumpReset();
    $rootScope.buttons = {
      label: score
    };
  }

  $scope.endByMaxAnswered = function(){
    $ionicLoading.show({
      template: 'Loading...'
    });
    $scope.user = serviceLogin.getUser();
    if($rootScope.scoreTotal>$scope.user.score){
      serviceUpdateScore.setUser(
        $scope.user.email,
        $scope.user.token,
        $rootScope.scoreTotal
      )
      factoryUpdateScore.update({ email: $scope.user.email }, {
        user: serviceUpdateScore.getUser()
      }, function(user) {
        $ionicLoading.hide();
        $ionicPopup.alert({
          title: 'Fim da partida',
          template: 'Novo Recorde Pessoal! \n Sua pontuação é: '+$rootScope.scoreTotal+' pontos!'
        });
        $state.go('app.profile');
      }, function(error) {
        $ionicLoading.hide();
        $ionicPopup.alert({
          title: 'Erro!',
          template: 'Erro de comunicação com o servidor! Pontuação nao enviada!'
        });
        $state.go('app.profile');
      });
    }else {
      $ionicLoading.hide();
      $ionicPopup.alert({
        title: 'Fim da partida',
        template: 'Sua pontuação é: '+$rootScope.scoreTotal+'pontos!'
      });
      $state.go('app.profile');
    }
  }

  $scope.compare = function(x, y) {
    if (x === y) {
      $scope.certa = true;
      answer = ScoreEntry.getTrue();
      var points;

      if (answer < 3) {
        score = ScoreEntry.getBonus();
        points = 50;
      } else if (answer >= 3 && answer < 6) {
        score = ScoreEntry.getBonus2();
        points = 100;
      } else if (answer >= 6 && answer < 9) {
        score = ScoreEntry.getBonus4();
        points = 200;
      } else {
        score = ScoreEntry.getBonus8();
        points = 400;
      }

      $rootScope.scoreTotal = ScoreEntry.getScoreTotal();

      $rootScope.buttons = {
          label: score
      };
      console.log("Certo:Total = " + $rootScope.scoreTotal);
      var popup = $ionicPopup.alert({
        title: 'Acertou!',
        template: 'Parabens! Mais '+points+' pontos!'
      });
      popup.then(function(res) {
        if ($scope.answered > 10) {
          $scope.endByMaxAnswered();
        }else {
          $scope.values = serviceGame.buttonPress().get();
        }
      });

    } else {

      $scope.certa = false;

      answer = ScoreEntry.getAnswerTrue();
      score = ScoreEntry.getScore();
      points = 0;
      $rootScope.scoreTotal = ScoreEntry.getScoreTotal();

      $rootScope.buttons = {
          label: score
      };

      if (answer >= 1) {
          ScoreEntry.resetTrue();
          addScore(answer);
      }
      var popup = $ionicPopup.alert({
        title: 'Errou!',
        template: 'Que pena, você não ganhou nada! :('
      });
      popup.then(function(res) {
        if ($scope.answered > 10) {
          $scope.endByMaxAnswered();
        }else {
          $scope.values = serviceGame.buttonPress().get();
        }
      });
    }
    $scope.answered +=1;
  }

  $scope.jump = function() {
    $scope.values = serviceGame.buttonPress().get();
  }

  $scope.jumpQuestion = function() {
    jump += 1;
    if (jump > 3) {
      var popup = $ionicPopup.alert({
        title: 'Você atingiu o limite máximo de pular questões!'
      });
    } else {
      $scope.values = serviceGame.buttonPress().get();
    }
  }

  $scope.endByRequest = function(){
    var confirmPopup = $ionicPopup.confirm({
      title: 'Fim da partida',
      template: 'Deseja realmente encerrar a partida?'
    });

    confirmPopup.then(function(answer){
      if (answer){
        $ionicLoading.show({
          template: 'Loading...'
        });
        $scope.user = serviceLogin.getUser();
        if($rootScope.scoreTotal>$scope.user.score){
          serviceUpdateScore.setUser(
            $scope.user.email,
            $scope.user.token,
            $rootScope.scoreTotal
          )
          factoryUpdateScore.update({ email: $scope.user.email }, {
            user: serviceUpdateScore.getUser()
          }, function(user) {
            $ionicLoading.hide();
            $ionicPopup.alert({
              title: 'Fim da partida',
              template: 'Novo Recorde Pessoal! \n Sua pontuação é: '+$rootScope.scoreTotal+'pontos!'
            });
            $state.go('app.profile');
          }, function(error) {
            $ionicLoading.hide();
            $ionicPopup.alert({
              title: 'Erro!',
              template: 'Erro de comunicação com o servidor! Pontuação nao enviada!'
            });
            $state.go('app.profile');
          });
        }else {
          $ionicLoading.hide();
          $ionicPopup.alert({
            title: 'Fim da partida',
            template: 'Sua pontuação é: '+$rootScope.scoreTotal+'pontos!'
          });
          $state.go('app.profile');
        }
      }
      else {
        $ionicLoading.hide();
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
