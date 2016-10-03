'use strict';

exports.seed = function(knex) {
  return knex('sms').del()
    .then(() => knex('sms').insert([
      {
        id: 1,
        sms_id: 1,
        date: '02.10.2016',
        time: '11:00',
        team1: 'Manchester United',
        team2: 'Stoke City',
        created_at: new Date('2016-09-15 12:16:16 UTC'),
        updated_at: new Date('2016-09-15 12:16:16 UTC')
      }])
    )
    .then(() => knex.raw(
        "SELECT setval('sms_id_seq', (SELECT MAX(id) FROM sms));"
      )
    );
};
