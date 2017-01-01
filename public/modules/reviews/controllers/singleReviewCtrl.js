'use strict';
angular.module('northStarAdmin')
  .controller('singleReviewCtrl',
    function ($scope, sessionsSrvc, $routeParams) {

      function getReview() {
        sessionsSrvc.getReview($routeParams.id)
          .then(result => {
            console.log(result);
            $scope.reviews = result.data;
          })
      }

      getReview()


    });