'use strict';

const { checkAuth } = require('./auth-middleware');
const { checkTeam } = require('./team-middleware');
const knex = require('../knex');
const express = require('express');
const bcrypt = require('bcrypt-as-promised');
const boom = require('boom');
const { camelizeKeys, decamelizeKeys } = require('humps');
const moment = require('moment');
const axios = require('axios');
const request = require('request-promise');

const router = express.Router();

router.use('/events/match', (req, res, next) => {
  request({
    method: 'POST',
    uri: 'https://api.cronofy.com/v1/calendars/cal_V9QpRGjRXV02ABOE_46hzbg@xeE9gg554OEujzw/events',
    headers: {'Authorization': 'Bearer DqaaUZr7h88Mx1BZi8ZvRNHigueAtKvF'},
    json: true,
    body: {
        event_id: '5',
        summary: 'hope this works.',
        description: 'description',
        start: '2016-10-10T15:30:00Z',
        end: '2016-10-10T15:30:00Z'
    },
  })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;


// http POST https://api.cronofy.com/v1/calendars/cal_V9QpRGjRXV02ABOE_46hzbg@xeE9gg554OEujzw/events
// Authorization:"bearer IVc1pOHe0DUM487mg6LflTFIa7ZOKhXv"
// event_id=1
// summary=first
// description=second
// start=2016-10-10T15:30:00Z
// end=2016-10-10T15:30:00Z
