angular.module('starter')

.factory('factoryUpdateScore', function($resource) {
   // return $resource("https://quantovaleplay.herokuapp.com/users/update_score/:email);
    return $resource("https://quantovaleplay.herokuapp.com/users/update_score/:email", null,
    {
        'update': { method:'PUT' }
    })
})
