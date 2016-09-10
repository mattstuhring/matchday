'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection:
      'postgres://localhost/epl_matchday_dev'
  },

  test: {
    client: 'pg',
    connection:
      'postgres://localhost/epl_matchday_test'
  },

  production: {
  client: 'pg',
  connection: process.env.DATABASE_URL
  }
}
