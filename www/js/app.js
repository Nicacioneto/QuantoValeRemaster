// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngResource', 'angularUtils.directives.dirPagination', 'ionic-material', 'ionMdInput', ])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
  .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $ionicConfigProvider.views.maxCache(0);


    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })

    .state('app.ranking', {
        url: '/ranking',
        views: {
          'menuContent': {
            templateUrl: 'templates/ranking.html',
            controller: 'RankingCtrl'
          }
        }
      })
      .state('app.profile', {
        url: '/profile',
        views: {
          'menuContent': {
            templateUrl: 'templates/profile.html',
            controller: 'profileCtrl'
          },
          'fabContent': {
            template: '<div class="button-fab"></div>',
            controller: function($timeout) {
              /*$timeout(function () {
                  document.getElementById('fab-profile').classList.toggle('on');
              }, 800);*/
            }
          }
        }
      })
      .state('app.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl'
          },
          'fabContent': {
            template: ''
          }
        }
      })
      .state('app.game', {
        url: '/game',
        views: {
          'menuContent': {
            templateUrl: 'templates/game.html',
            controller: 'gameCtrl'
          },
          'fabContent': {
            template: '<button id="fab-gallery" class="button button-fab button-fab-top-right expanded button-energized-900 drop">Score</button>',
            controller: function($timeout) {
              $timeout(function() {
                document.getElementById('fab-gallery').classList.toggle('on');
              }, 600);
            }
          }
        }
      })
      .state('app.resetsend', {
        url: '/resetsend',
        views: {
          'menuContent': {
            templateUrl: 'templates/resetsend.html',
            controller: 'ResetPasswordCtrl'
          }
        }
      })
      .state('app.resetedit', {
        url: '/resetedit',
        views: {
          'menuContent': {
            templateUrl: 'templates/resetedit.html',
            controller: 'ResetPasswordCtrl'
          }
        }
      })
      .state('app.resetkeyenter', {
        url: '/resetkeyenter',
        views: {
          'menuContent': {
            templateUrl: 'templates/resetkeyenter.html',
            controller: 'ResetPasswordCtrl'
          }
        }
      })
      .state('app.theme', {
        url: '/theme',
        views: {
          'menuContent': {
            templateUrl: 'templates/theme.html',
            controller: 'themeCtrl'
          },
          'fabContent': {
            template: '<div class="button-fab"></div>',
            controller: function($timeout) {
              /*$timeout(function () {
                  document.getElementById('fab-profile').classList.toggle('on');
              }, 800);*/
            }
          }
        }
      })
      .state('app.signup', {
        url: '/signup',
        views: {
          'menuContent': {
            templateUrl: 'templates/signup.html',
            controller: 'SignupCtrl'
          }
        }
      });
    $urlRouterProvider.otherwise("app/home");
  })

.controller("MainController", ['$scope', '$ionicSideMenuDelegate', function($scope, $ionicSideMenuDelegate) {

  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  }
}])
