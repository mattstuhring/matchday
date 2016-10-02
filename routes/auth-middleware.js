'use strict';

const jwt = require('jsonwebtoken');

const checkAuth = function(req, res, next) {
  jwt.verify(req.cookies.accessToken, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.sendStatus(401);
    }

    req.token = decoded;
    // You can now access the payload via req.token.userId
    next();
  });
}

module.exports = { checkAuth };
