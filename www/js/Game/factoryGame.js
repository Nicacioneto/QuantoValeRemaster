angular.module('callRails', ['ngResource'])

.constant('CALL_RAILS', {
  url: "http://localhost:3000/questoes/:id"
})
