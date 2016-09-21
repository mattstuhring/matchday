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

router.get('/clubs/:id', (req, res, next) => {
  console.log(req.params.id);
  const { id } = req.params;
  const date = moment().format('DD.MM.YYYY');

  knex('clubs')
    .where('team_id', id)
    .first()
      .then((club) => {
        console.log(club);
        res.send(club);
      })
      .catch((err) => {
        next(err);
      });
});

router.get('/clubs/match/:id', (req, res, next) => {
  const { id } = req.params;
  const start = moment().format('DD.MM.YYYY');
  console.log(start);
  const end = moment().add(10, 'days').format('DD.MM.YYYY');
  console.log(end);

  axios.get(`http://api.football-api.com/2.0/matches?comp_id=1204&team_id=${id}&from_date=${start}&to_date=${end}&Authorization=565ec012251f932ea400000119a15146d7c5405a4923d2307279b822`)
    .then((match) => {
      res.send(match.data);
    })
    .catch((err) => {
      next(err);
    });

});

module.exports = router;
