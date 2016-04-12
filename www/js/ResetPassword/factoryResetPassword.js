angular.module('starter')

.factory('factoryResetPassword', function($resource) {
  // return $resource("http://quantovale.herokuapp.com/password_reset/create");
  return $resource("http://localhost:3000/password_reset/create")
})

.factory('factoryResetPasswordKeyEnter', function($resource) {
  // return $resource("http://quantovale.herokuapp.com/password_reset/create");
  return $resource("http://localhost:3000/password_reset/:key/edit")
})

.factory('factoryResetPasswordEdit', function($resource) {

  // return $resource("http://quantovale.herokuapp.com/password_reset/create");
  return $resource("http://localhost:3000/password_reset/:key", {}, {
      'update': { method:'PATCH',
                  params:{  key:'@key' }
      }

  })
})
