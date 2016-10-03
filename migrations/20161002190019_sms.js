'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('sms', (table) => {
    table.increments();
    table.string('date');
    table.string('time');
    table.string('team1');
    table.string('team2');
    table.integer('sms_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('sms');
};
