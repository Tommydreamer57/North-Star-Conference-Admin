'use strict';
angular.module('northStarAdmin')
  .controller('NewSessionCtrl',
    function ($scope, sessionsSrvc) {
      $scope.addSession = function(session){
          sessionsSrvc.addSession(session)
            .then(result => {
              if(result.data === "500"){
                $scope.creationFailure = true;
              }
             else {
                $scope.creationFailure = false;
                $scope.creationSuccess = true;
              }

            })
      };

      $scope.resetForm = function () {
        document.getElementById("newSessionForm").reset();
      }
    });