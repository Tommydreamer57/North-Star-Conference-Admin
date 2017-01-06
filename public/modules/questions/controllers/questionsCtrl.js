'use strict';
angular.module('northStarAdmin')
  .controller('questionsCtrl',
    function ($scope, sessionsSrvc, $routeParams) {
    let questions;
      function getQuestions() {
        sessionsSrvc.getQuestions($routeParams.id)
          .then(result => {
           questions = result.data;
           $scope.questions = questions;
          })
      }
      function getSession() {
        let session = sessionsSrvc.getSession($routeParams.id);
        $scope.session = session;
      }
      getSession();
      getQuestions()
    });