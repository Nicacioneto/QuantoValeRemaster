angular.module('starter')

.factory('factoryResetPassword', function($resource) {
  // return $resource("http://quantovale.herokuapp.com/password_reset/create");
  return $resource("http://localhost:3000/password_reset/create")
})
