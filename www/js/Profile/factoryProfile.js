angular.module('starter')

.factory('factoryProfile', function($http) {
  return  $resource("http://quantovale.herokuapp.com//users/:id");
})
