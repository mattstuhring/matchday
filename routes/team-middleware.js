'use strict';

const jwt = require('jsonwebtoken');

const checkTeam = function(req, res, next) {
  jwt.verify(req.cookies.accessToken, 'SECRET_KEY', (err, decoded) => {
    if (err) {
      return res.sendStatus(401);
    }

    req.token = decoded;
    // You can now access the payload via req.token.userId
    next();
  });
}

module.exports = { checkTeam };
