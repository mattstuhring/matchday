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

router.post('/sms', checkAuth, (req, res, next) => {
  const you = req.body.to;
  const me = req.body.from;
  const text = req.body.body;
  const smsId = req.token.userId;

  const client = new twilio.RestClient('ACa5d56c219693886f230c2afd8f5c7015', 'f0d6e4c300ed17f45d1847b0bdb117e3');

  client.sms.messages.create({
      to: you,
      from: me,
      body: `${text.time} ${text.date} ${text.team1} v ${text.team2} ${text.venue}`
  }, function(error, message) {
      if (!error) {

        knex('sms')
          .select(knex.raw('1=1'))
          .where('id', req.token.userId)
          .first()
          .then(() => {
            // TODO: guard clause

            return knex('sms')
              .insert({
                date: text.date,
                time: text.time,
                team1: text.team1,
                team2: text.team2,
                sms_id: smsId,
              });
          })
          .then(() => {
            return knex('sms')
              .where('sms_id', smsId);
              // TODO: Add more where clause filtering with dates ranges
          })
          .then((response) => {
            res.json(response);
          })
          .catch((err) => {
            next(err);
          });

          console.log('Success!');
          console.log(message.sid);

          console.log('Message sent on:');
          console.log(message.dateCreated);
          return;
      } else {
          console.log('Oops! There was an error.');
      }
  });

});

router.get('/sms/all', checkAuth, (req, res, next) => {
  knex('sms')
    .select()
    .where('sms_id', req.token.userId)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/sms/:id', (req, res, next) => {
  knex('sms')
    .where('id', req.params.id)
    .first()
    .then((text) => {
      return knex('sms')
        .del()
        .where('id', req.params.id)
        .then(() => {
          delete text.id;
          res.send(text);
        });
    })
    .then(() => {
      knex('sms')
        .select()
        .where('sms_id', req.token.userId)
        .then((response) => {
          res.send(response);
        })
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
