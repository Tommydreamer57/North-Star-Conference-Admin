'use strict';
let confSessionsDb = require('./confSessionsDb');

module.exports ={

  getAllSessions: function (req, res){
    confSessionsDb.read_confSessions([], (err, sessions) => {
      res.send(sessions);
    })
  },

  createSession: function (req, res) {
    let session = req.body;
    confSessionsDb.write_confSession([
      session.sessiontype,
      session.title,
      session.speaker,
      session.description
    ], (err, response) => {
      if(err){
        res.send("500")
      }
      else{
        res.send("200");
      }
    });
  },

  updateSession: function (req, res) {
    let session = req.body;
    confSessionsDb.update_session([
      session.sessiontype,
      session.title,
      session.speaker,
      session.description,
      session.id
    ], (err, response) => {
      if(err){
        console.log(err);
        res.send("500")
      }
      else{
        res.send("200");
      }
    });
  },

  deleteSession(req, res){
    confSessionsDb.delete_confSession([req.params.id], (err, response) => {
      res.send(response);
    })
  },

  getAllReviews: function (req, res) {
    confSessionsDb.read_reviews([], (err, reviews) => {
      res.send(reviews)
    })
  },

  getReview: function (req, res) {
    confSessionsDb.read_review([req.params.id], (err, review) => {
      res.send(review)
    })
  },

  createReview: function (req, res) {
    let review = req.body;
    confSessionsDb.write_review([
      review.sessionId,
      review.sessionTitle,
      review.sessionSpeaker,
      review.userName,
      review.userEmail,
      review.likeFeedback,
      review.dislikeFeedback,
      review.generalFeedback
    ], (err, response) => {
      if(err){
        console.log(err);
      }
      res.send(response)
    })
  },

  createQuestion: function (req, res) {
    let question = req.body;
    confSessionsDb.write_question([
      question.sessionId,
      question.question
    ], (err, response) => {
      if(err){
        console.log(err);
      }
      res.send(response)
    })

  },

  getQuestion: function (req, res) {
    confSessionsDb.read_question([req.params.id], (err, review) => {
      res.send(review)
    })
  },

};
