'use strict';
let express = require('express');
let app = express();
let cors = require('cors');
let bodyParser = require('body-parser');
let dbCtrl = require('./db/dbctrl');
let port = process.env.PORT || 8080;

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
app.use(express.static('./public'));


app.get('/api/sessions', dbCtrl.getAllSessions);
app.post('/api/addSession', dbCtrl.createSession);
app.delete('/api/session/:id', dbCtrl.deleteSession);
app.post('/api/updateSession', dbCtrl.updateSession);
app.post('/api/review', dbCtrl.createReview);
app.get('/api/review/:id', dbCtrl.getReview);
app.get('/api/reviews', dbCtrl.getAllReviews);
app.get('/api/questions/:id', dbCtrl.getQuestion);
app.post('/api/questions', dbCtrl.createQuestion);
app.get('/api/contact/:demographic', dbCtrl.getContact);
app.post('api/contact', dbCtrl.createContact);


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});