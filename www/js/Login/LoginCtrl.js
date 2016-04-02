angular.module('starter')

.controller('LoginCtrl', function($scope, $state, factoryLogin, factoryRegister, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {

  // Set Header
$scope.$parent.showHeader();
$scope.$parent.clearFabs();
$scope.isExpanded = false;
$scope.$parent.setExpanded(false);
$scope.$parent.setHeaderFab(false);


  $scope.login = function() {
    var ref = new Firebase("https://firefacetest.firebaseio.com");

    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        $scope.logged = function() {
          return false;
        }
        console.log("Login Failed!", error);
      } else {
        $scope.logged = function() {
          return true;
        }
        $scope.fblogged = function(){
          return true;
        }
        $scope.user = authData;
        console.log(authData);
        var user = {
          name: authData.facebook.displayName,
          email: authData.facebook.email,
          score: '0',
          idFacebook: authData.facebook.id
        }
        factoryRegister.save(user);

        console.log("Authenticated successfully:", $scope.user);
        $state.go('app.profile');
      }
    });
  }

  $scope.create = function(user) {

  factoryRegister.save(user,function(user){
      alert("Succes")
      console.log(user);
      },function(error){
        alert("Ocorreu um problema ou esse email já é cadastrado")
    });
  }

  var total = 0;
  var correct_answer = 0;

  $scope.start = function() {
    correct_answer = 0;
    total = 0;
    console.log ("Answer = " +correct_answer);
    console.log ("Total = " +total);
  }

  $scope.true = function() {
    return true;
  }

  $scope.false = function() {
    return false;
  }

  $scope.question = function() {

    compare = function(x,y) {

      if (x == y){
        correct_answer += 1;
        score(correct_answer);
        console.log ("CORRECT == " + correct_answer);
      }
      else{
        correct_answer = 0;
        console.log ("CORRECT == " + correct_answer);
      }
    }

    score = function(correct_answer) {

      if (correct_answer < 3){
        score += 50;
        console.log ("SCORE == " + score);
      }
      else if (correct_answer >= 3 && correct_answer < 6){
        score += 100;
        console.log ("SCORE == " + score);
      }
      else{
        score += 200;
        console.log ("SCORE == " + score);
      }

    }
  }

  $scope.loginEmail = function(user) {
    factoryLogin.get(user,function(user){
      $scope.user = user;
      console.log($scope.user);
      $scope.logged = function() {
        return true;
      }
      $scope.fblogged = function(){
        return false;
      }
    },function(){
        $scope.logged = function() {
          return false;
        }
    })
  }

})
