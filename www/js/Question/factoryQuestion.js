angular.module('starter')

.factory('factoryUpdateScore', function($resource) {
   // return $resource("http://quantovale.herokuapp.com/users/update_score/:email);
    return $resource("http://localhost:3000/users/update_score/:email", null,
    {
        'update': { method:'PUT' }
    })
})
