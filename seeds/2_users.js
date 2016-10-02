'use strict';

exports.seed = function(knex) {
  return knex('users').del()
    .then(() => knex('users').insert([
      {
        id: 1,
        first_name: 'Matt',
        last_name: 'Stuhring',
        email: 'matt@test.com',
        hashed_password: '$2a$12$3FKzHXywOeX8qxhy2u7DC.oqPKgtGnAfheo9lT5PoeQKPQSJoI3p2',
        team_id: 9260,
        phone_number: '+14257651612',
        created_at: new Date('2016-09-15 12:16:16 UTC'),
        updated_at: new Date('2016-09-15 12:16:16 UTC')
      }])
    )
    .then(() => knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      )
    );
};
