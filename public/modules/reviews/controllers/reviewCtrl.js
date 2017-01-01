'use strict';
angular.module('northStarAdmin')
  .controller('reviewCtrl',
    function ($scope, sessionsSrvc) {

      function getAllReviews() {
        sessionsSrvc.getAllReviews()
          .then(result => {
            console.log(result);
            $scope.reviews = result.data;
          })
      }

      getAllReviews()


    });