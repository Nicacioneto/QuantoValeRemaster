angular.module('starter')

.controller('RankingCtrl', function($scope, factoryRanking) {

  factoryRanking(function(data) {
    //Passando os users para a pagina de Ranking
    console.log(data);
    $scope.users = data.data;

  });

})
