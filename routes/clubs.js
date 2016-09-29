'use strict';

const knex = require('../knex');
const express = require('express');
const moment = require('moment');
const axios = require('axios');


const router = express.Router();

router.get('/clubs', (req, res, next) => {
  knex('clubs')
    .then((clubs) => {
      res.send(clubs);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/clubs/matches', (req, res, next) => {
  const start = moment().startOf('isoWeek').format('DD.MM.YYYY');
  const end = moment().endOf('isoWeek').format('DD.MM.YYYY');

  axios.get(`http://api.football-api.com/2.0/matches?comp_id=1204&team_id=9002%2C%209053%2C%209072%2C%209092%2C%209127%2C%209158%2C%209221%2C%209240%2C%209249%2C%209259%2C%209260%2C%209274%2C%209363%2C%209378%2C%209384%2C%209387%2C%209406%2C%209423%2C%209426%2C%209427&from_date=${start}&to_date=${end}&Authorization=565ec012251f932ea400000119a15146d7c5405a4923d2307279b822`)
    .then((matches) => {
      res.send(matches.data);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/clubs/table', (req, res, next) => {
  axios.get('http://api.football-api.com/2.0/standings/1204?Authorization=565ec012251f932ea400000119a15146d7c5405a4923d2307279b822')
    .then((table) => {
      res.send(table.data);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/clubs/:id', (req, res, next) => {
  const { id } = req.params;

  knex('clubs')
    .where('team_id', id)
    .first()
      .then((club) => {
        res.send(club);
      })
      .catch((err) => {
        next(err);
      });
});

router.get('/clubs/match/:id', (req, res, next) => {
  const { id } = req.params;
  const start = moment().format('DD.MM.YYYY');
  const end = moment().add(10, 'days').format('DD.MM.YYYY');

  axios.get(`http://api.football-api.com/2.0/matches?comp_id=1204&team_id=${id}&from_date=${start}&to_date=${end}&Authorization=565ec012251f932ea400000119a15146d7c5405a4923d2307279b822`)
    .then((match) => {
      res.send(match.data);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/clubs/team/:id', (req, res, next) => {
  const { id } = req.params;

  axios.get(`http://api.football-api.com/2.0/team/${id}?Authorization=565ec012251f932ea400000119a15146d7c5405a4923d2307279b822`)
  .then((team) => {
    res.send(team.data);
  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;
