'use strict';
let confSessionsDb = require('./confSessionsDb');
let moment = require('moment');

function mapSessions(data) {
    let mappedSessions = [];
    //Create Mapped array with sessionType, SessionTime, then array of sessions
    data.map(function (session) {
        let isMapped = mappedSessions.find(function (mappedSession) {
            return mappedSession.sessionType === session.sessiontype;
        });

        if(!isMapped){
            mappedSessions.push({
                sessionType: session.sessiontype,
                sessionTime: session.sessiontime,
                sessions: []
            })
        }
    });

    //Add sessions to the session object in the mapped session.
    data.map(function (session) {
        let mappedSession = mappedSessions.find(function (mappedSession) {
            return mappedSession.sessionTime === session.sessiontime;
        });
        if(mappedSession){
            mappedSession.sessions.push(session);
        }
    });
    return mappedSessions;
}

module.exports ={

  getAllSessions: function (req, res){
    confSessionsDb.read_confSessions([], (err, sessions) => {
      let mappedSessions = mapSessions(sessions);
      res.send(mappedSessions);
    })
  },

  createSession: function (req, res) {
    let session = req.body;
    console.log(session);
    confSessionsDb.write_confSession([
      session.sessiontype,
      session.title,
      session.speaker,
      session.demographic,
      session.room,
      session.sessionTime,
      session.description
    ], (err, response) => {
      if(err){
        res.send("500")
      }
      else{
        console.log(response);
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
      session.demographic,
			session.description,
      session.room,
			session.sessiontime,
			session.id
    ], (err, response) => {
      if(err){
        console.log(err);
        res.send("500");
        console.log(err);
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
    console.log(question);
    confSessionsDb.write_question([
      question.sessionId,
      question.question,
      question.sessiontime = moment.now(),
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
