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

.service('serviceResetPassword', function() {

  var user = {}

  var setUser = function(passwordResetKey, password, passwordConfirmation) {
    user.password_reset_key = passwordResetKey
    user.password = password,
    user.password_confirmation = passwordConfirmation
  }

  var getUser = function() {
    return user;
  }

  return {
    setUser: setUser,
    getUser: getUser
  }

})
