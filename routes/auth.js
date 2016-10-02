'use strict';

const express = require('express');
const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2');
const axios = require('axios');
const router = express.Router();
const request = require('request-promise');

const strategy = new OAuth2Strategy({
  authorizationURL: 'https://app.cronofy.com/oauth/authorize',
  scope: ['read_events', 'create_event', 'delete_event'],
  tokenURL: 'https://api.cronofy.com/oauth/token',
  clientID: process.env.CRONOFY_CLIENT_ID,
  clientSecret: process.env.CRONOFY_CLIENT_SECRET,
  callbackURL: 'http://localhost:8000/auth/cronofy/callback',
}, (accessToken, refreshenToken, calendar, cb) => {
  request({
    uri: 'https://api.cronofy.com/v1/calendars',
    headers: {'Authorization': `Bearer ${accessToken}`},
    json: true
  })
    .then((result) => {
      console.log(result);
      // could add to db at this point

      calendar = result;
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(accessToken);
  console.log(refreshenToken);
  cb(null, {calendar});
});

passport.use(strategy);

router.get('/cronofy', passport.authenticate('oauth2'));

router.get('/cronofy/callback', passport.authenticate('oauth2', {
  failureRedirect: '/register',
  successRedirect: '/register'
}));

module.exports = router;
