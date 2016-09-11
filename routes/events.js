'use strict';

/* eslint-disable camelcase */
const express = require('express');
const cronofy = require('cronofy');

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('api/events', (req, res, next) => {
  cronofy.listCalendars({ access_token: 'nOr7Gt0ugTWdGma9A4V1JCclDMminfuY'})
    .then(function (response) {
        console.log(response);
    });

    var options = {
      access_token: 'nOr7Gt0ugTWdGma9A4V1JCclDMminfuY',
      client_id: 'RzZI4p70yc3u8-KtPgILa55rqL5yDTvn',
      client_secret: '9CRy7lbKCa4yCprQPQ2Ow4zxAR2_4zfznreIsMX3RquiquGiV710mQuA3BNyiH58wRLW_mCD2M1gCfDn0gXRQQ',
      tzid: 'Etc/UTC'
    };

    // Alternatively as a callback
    cronofy.requestAccessToken(options, function(err, response){
      if (err) {
        throw err;
      }

      console.log(response);
    })
});

module.exports = router;
