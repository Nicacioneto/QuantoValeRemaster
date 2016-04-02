angular.module ('starter')

.controller('questionCtrl', function($scope, questionFactory) {

    var total = 0;
    var correct_answer = 0;

    $scope.start = function() {
      correct_answer = 0;
      total = 0;
      console.log ("Answer = ", +correct_answer);
      console.log ("Total = ", +total);
    }


})
