angular.module('starter')

.factory('factoryRanking', function($http) {

  return  $http.get("http://quantovale.herokuapp.com/");



})
