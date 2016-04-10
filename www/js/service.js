angular.module('starter')

.service('serviceLogin', function() {

  var user = {}

  var setUser = function(name, email, score, idFacebook) {
    user.name = name,
      user.email = email,
      user.score = score,
      user.idFacebook = idFacebook,
      user.password = idFacebook,
      user.password_confirmation = idFacebook
  }

  var getUser = function() {
    return user;
  }

  return {
    setUser: setUser,
    getUser: getUser
  }

})
