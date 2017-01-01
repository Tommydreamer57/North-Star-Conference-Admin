'use strict';
angular.module('northStarAdmin')
  .controller('updateSessionCtrl', function ($scope, sessionsSrvc, $timeout, $routeParams) {

    $scope.session = sessionsSrvc.getSession($routeParams.id);

    function getAllSessions() {
      sessionsSrvc.getSessions()
        .then(sessions => {
          $scope.sessions = sessions;
        });
    }

    $scope.removeSession = function (sessionId) {
      console.log(sessionId);
      $scope.sessionRemoved = true;
      resetAlers()
    };

    getAllSessions();

    function resetAlers() {
      $timeout(function () {
        $scope.sessionRemoved = false;
      }, 3000);
    }

  });