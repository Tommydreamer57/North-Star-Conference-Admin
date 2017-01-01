'use strict';
angular.module('northStarAdmin')
  .controller('AllSessionsCtrl', function ($scope, sessionsSrvc, $timeout, $routeParams) {
    if($routeParams.id){
      $scope.session = sessionsSrvc.getSession($routeParams.id);
    }
    $scope.updateSession = function (session) {
      sessionsSrvc.updateSession(session)
        .then(result => {
          console.log(' here is the result' ,result);
        $scope.sessionUpdated = true;
        // resetAlerts();
        })
    };

    function getAllSessions() {
      sessionsSrvc.getSessions()
        .then(sessions => {
          $scope.sessions = sessions;
        });
    }


    $scope.removeSession = function () {
      sessionsSrvc.removeSession($scope.sessionToBeRemoved)
        .then(() => {
          $scope.sessionRemoved = true;
          getAllSessions();
          resetAlerts()
        });

    };

    getAllSessions();

    function resetAlerts() {
      $timeout(function () {
        $scope.sessionRemoved = false;
        $scope.sessionUpdated = false;
      }, 4000);
    }

    $('#removeSession').on('show.bs.modal', function(e) {

      let $modal = $(this),
        sessionData = e.relatedTarget.id;
      let session = sessionData.split(', ');
      $scope.sessionToBeRemoved = session[0];
      let title = session[1];
      $modal.find('.sessionTitle').html(title);
    })

  });