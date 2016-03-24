angular.module('starter')

.factory('factoryLogin', function($resource) {
//  return $resource("http://quantovale.herokuapp.com/users/create");
  return $resource("http://localhost:3000/users/create");
})
