'use strict';

const { checkAuth } = require('./auth-middleware');
const knex = require('../knex');
const express = require('express');
const bcrypt = require('bcrypt-as-promised');
const boom = require('boom');
const { camelizeKeys, decamelizeKeys } = require('humps');
const moment = require('moment');
const twilio = require('twilio');

const router = express.Router();

router.post('/sms', (req, res, next) => {
  const you = req.body.to;
  const me = req.body.from;
  const message = req.body.body;
console.log(message);

  var client = new twilio.RestClient('ACa5d56c219693886f230c2afd8f5c7015', 'f0d6e4c300ed17f45d1847b0bdb117e3');

  client.sms.messages.create({
      to: you,
      from: me,
      body: `${message.time} ${message.date} ${message.team1} v ${message.team2} ${message.venue}`
  }, function(error, message) {
      if (!error) {
          console.log('Success!');
          console.log(message.sid);

          console.log('Message sent on:');
          console.log(message.dateCreated);
          return;
      } else {
          console.log('Oops! There was an error.');
      }
  });
  
  res.redirect('/profile');
});


module.exports = router;
