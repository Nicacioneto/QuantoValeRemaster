angular.module('starter')

.factory('factoryRegister', function($resource) {
  // return $resource("https://quantovaleplay.herokuapp.com/users/create");
  return $resource("https://quantovaleplay.herokuapp.com/users/create")
})

.factory('factoryLogin', function($resource) {
  // return $resource("https://quantovaleplay.herokuapp.com/users/create");
  return $resource("https://quantovaleplay.herokuapp.com/users/login/:email")
})
