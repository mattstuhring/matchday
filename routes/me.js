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
const jwt = require('jsonwebtoken');
const router = express.Router();

router.get('/me/team', checkAuth, (req, res, next) => {
  const { userId } = req.token;

  knex('users')
    .select('team_id')
    .where('id', userId)
    .first()
    .then((user) => {
      const start = moment().format('DD.MM.YYYY');
      const end = moment().add(14, 'days').format('DD.MM.YYYY');

      return axios.get(`http://api.football-api.com/2.0/matches?comp_id=1204&team_id=${user.team_id}&from_date=${start}&to_date=${end}&Authorization=565ec012251f932ea400000119a15146d7c5405a4923d2307279b822`)
        .then(match => {

          console.log(match, '$$$$$$$$$$$$$$$');

          let d = moment(match.data[0].formatted_date, "DD-MM-YYYY").format("MM-DD-YYYY");
          let iso = moment(d + 'T' + match.data[0].time, "MM-DD-YYYY HH:mm");

          iso = moment(iso).subtract(7, 'hours');
          iso = moment(iso).format('HH:mm A');
          match.data[0].pacific = iso + ' PST';
          d = moment(match.data[0].formatted_date, "DD-MM-YYYY").format("dddd, MMMM Do YYYY");
          match.data[0].date = d;

          return [match.data[0], user.team_id]
        })
        .catch((err) => {
          next(err);
        });
    })
    .then(([game, team_id]) => {
      return axios.get(`http://api.football-api.com/2.0/team/${team_id}?Authorization=565ec012251f932ea400000119a15146d7c5405a4923d2307279b822`)
      .then((result) => {

        let { data } = result
        data.game = game
        data.team_id = team_id
        return result;
      })
      .catch((err) => {
        next(err);
      });
    })
    .then((result) => {
      knex('clubs')
        .where('team_id', result.data.team_id)
        .first()
          .then((clubImg) => {
            let teamInfo = result.data;
            res.send({ clubImg, teamInfo });
          })
          .catch((err) => {
            next(err);
          });
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
