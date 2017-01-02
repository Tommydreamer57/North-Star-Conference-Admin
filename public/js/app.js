'use strict';
angular.module('northStarAdmin', ['ngRoute', 'ngCookies'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/login', {
        controller: 'LoginController',
        templateUrl: 'modules/authentication/views/login.html',
        hideMenus: true
      })
      .when('/home', {
        controller: 'HomeController',
        templateUrl: 'modules/home/home.html'
      })
      .when('/allSessions', {
        controller: 'AllSessionsCtrl',
        templateUrl: 'modules/sessions/views/allSessions.html'
      })
      .when('/newSession', {
        controller: 'NewSessionCtrl',
        templateUrl: 'modules/sessions/views/newSession.html'
      })
      .when('/updateSession/:id',{
        controller: 'AllSessionsCtrl',
        templateUrl: 'modules/sessions/views/updateSession.html'
      })
      .when('/reviews/:id', {
        controller: 'singleReviewCtrl',
        templateUrl: 'modules/reviews/views/singleReview.html'
      })
      .when('/allReviews', {
        controller: 'reviewCtrl',
        templateUrl: 'modules/reviews/views/allReviews.html'
      })
      .when('/questions/:id', {
        controller: 'questionsCtrl',
        templateUrl: 'modules/questions/views/questions.html'
      })

      .otherwise({ redirectTo: '/login' });
  }])

  .run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
      // keep user logged in after page refresh
      $rootScope.globals = $cookieStore.get('globals') || {};
      if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
      }

      $rootScope.$on('$locationChangeStart', function (event, next, current) {
        // redirect to login page if not logged in
        if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
          $location.path('/login');
        }
      });
    }]);