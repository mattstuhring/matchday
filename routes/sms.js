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

router.use('/', (req, res, next) => {

  var client = new twilio.RestClient('ACa5d56c219693886f230c2afd8f5c7015', 'f0d6e4c300ed17f45d1847b0bdb117e3');

  client.sms.messages.create({
      to:'+14257651612',
      from:'+14255599613',
      body:'Testing Twilio and node.js'
  }, function(error, message) {
      if (!error) {
          console.log('Success! The SID for this SMS message is:');
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
