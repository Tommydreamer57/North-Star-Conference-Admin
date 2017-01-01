'use strict';
angular.module('northStarAdmin')
  .service("sessionsSrvc", function ($http) {
    let sessions = [];
    this.getSessions = function () {
      return $http.get('/api/sessions')
        .then(res => {
          sessions = res.data;
          return sessions;
        });
    };

    this.updateSession = function (session) {
      console.log("Updating Session", session);
      return $http.post('/api/updateSession', session)
    };

    this.getSession = function (id) {
      return sessions.find(session => {
        return session.id === parseInt(id);
      })
    };

    this.addSession = function (session) {
      console.log(session);
      return $http.post('/api/addSession', session)
    };

    this.removeSession = function (sessionId) {
      return $http.delete('/api/session/' + sessionId)
    };

    this.getReview = function (reviewId) {
      return $http.get('/api/review/' + reviewId)
    };

    this.getAllReviews = function () {
      return $http.get('/api/reviews')
    }
  });