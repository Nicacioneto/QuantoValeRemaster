angular.module('starter')

.factory('factoryRanking', function($resource) {
  return $resource("http://quantovale.herokuapp.com/users/ranking");
})
