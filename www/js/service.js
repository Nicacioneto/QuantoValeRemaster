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

.service('serviceUpdateScore', function() {

  var user = {}

  var setUser = function(email, token, score) {
    user.email = email
    user.token = token
    user.score = score
  }

  var getUser = function() {
    return user;
  }

  return {
    setUser: setUser,
    getUser: getUser
  }

})

.factory('ScoreEntry', [function() {
  var answer = 0;
  var answerTrue = 0;
  var score = 0;
  var scoreTotal = 0;
  var jump = 0;
  return {
    getTrue: function() {
      return answerTrue += 1;
    },
    resetTrue: function() {
      return answerTrue = 0;
    },
    getAnswer: function() {
      return answer += 1;
    },
    resetAnswer: function() {
      return answer = 0;
    },
    getAnswerTrue: function() {
      return answer += 0;
    },
    getBonus: function() {
      return score += 50;
    },
    getBonus2: function() {
      return score += 100;
    },
    getBonus4: function() {
      return score += 200;
    },
    getBonus8: function() {
      return score += 400;
    },
    getScore: function() {
      return score += 0;
    },
    resetScore: function() {
      return score = 0;
    },
    getScoreTotal: function() {
      scoreTotal = score;
      return scoreTotal;
    },
    getScoreTotal1: function() {
      return scoreTotal;
    },
    jump: function(){
      return jump += 1;
    },
    jumpReset: function(){
      return jump = 0;
    }
  }
}])
