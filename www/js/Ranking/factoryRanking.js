angular.module('starter')

.factory('factoryRanking', function($resource) {
  return $resource("https://quantovaleplay.herokuapp.com/users/ranking");
})
