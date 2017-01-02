'use strict';
angular.module('northStarAdmin')
  .controller('questionsCtrl',
    function ($scope, sessionsSrvc, $routeParams) {
      function getQuestions() {
        sessionsSrvc.getQuestions($routeParams.id)
          .then(result => {
            console.log(result);
            $scope.questions = result.data;
          })
      }

      function getSession() {
        let session = sessionsSrvc.getSession($routeParams.id);
        $scope.session = session;
      }

      getSession();
      getQuestions()
    });