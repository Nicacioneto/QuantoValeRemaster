angular.module('starter')

.constant('CALL_RAILS', {
  url: "http://localhost:3000/questoes/:id"
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
