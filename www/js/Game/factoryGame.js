angular.module('starter')

.constant('CALL_RAILS', {
  url: "https://quantovaleplay.herokuapp.com/questoes/:id"
})

.factory('serviceGame', function(CALL_RAILS, $resource) {
  // the last called id
  var previousId = 1;
  return {
    // calling the function with the new id
    buttonPress: function() {
      previousId += 1;
      return $resource(CALL_RAILS.url, {
        id: previousId
      });
    },
    getPreviousId: function() {
      return previousId;
    },
    resetPreviousId: function() {
      previousId = 0;
    }
  }
})

.factory('factoryUpdateScore', function($resource) {
  // return $resource("http://quantovale.herokuapp.com/users/update_score/:email");
  return $resource("https://quantovaleplay.herokuapp.com/users/update_score/:email", {}, {
      'update': { method:'PATCH',
                  params:{  email:'@email' }
      }
  })
})
