angular.module('starter')

.factory('factoryLogin', function($resource) {
  return $resource("http://quantovale.herokuapp.com/users/create");
})
