'use strict';

const ev = require('express-validation');
const bcrypt = require('bcrypt-as-promised');
const boom = require('boom');
const express = require('express');
// const validations = require('../validations/token');
const knex = require('../knex');
const { camelizeKeys } = require('humps');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/token', (req, res, next) => {
  let user;

  knex('users')
    .where('email', req.body.email)
    .first()
    .then((row) => {
      if (!row) {
        throw boom.create(401, 'Invalid username or password');
      }

      user = camelizeKeys(row);

      return bcrypt.compare(req.body.password, user.hashedPassword);
    })
    .then(() => {
      const expiry = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30);
      const token = jwt.sign(
        { userId: user.id },
        process.env.SECRET_KEY,
        { expiresIn: '30 days' }
      );

      res.cookie('accessToken', token, {
        httpOnly: true,
        expires: expiry,
        secure: router.get('env') === 'production'
      });
      res.cookie('loggedIn', true, {
        expires: expiry,
        secure: router.get('env') ===
        'production'
      });

      res.sendStatus(200);
    })
    .catch(bcrypt.MISMATCH_ERROR, () => {
      throw boom.create(401, 'Invalid username or password.');
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/token', (req, res) => {
  res.clearCookie('accessToken');
  res.clearCookie('loggedIn');
  res.sendStatus(200);
});

module.exports = router;
