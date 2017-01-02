'use strict';
angular.module('northStarAdmin')
  .controller('questionsCtrl',
    function ($scope, sessionsSrvc, $routeParams) {
    let questions = [];
    

    let interval = 0;
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

      $scope.startGettingQuestions = function() {
        interval = 5000;
        console.log('It is set');
				setInterval(function(){
				  console.log('I am still going');
				  console.log(interval);
					getQuestions();
				}, interval);
			};

      $scope.stopGettingQuestions = function () {
        console.log('I am trying to stop')
        interval = 0;
			};

			setInterval(function(){
				getQuestions();
			}, interval);



      getSession();
      getQuestions()
    });