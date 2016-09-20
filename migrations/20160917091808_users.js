'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('first_name').defaultTo('');
    table.string('last_name').defaultTo('');
    table.string('email').unique().notNullable().defaultTo('');
    table.string('email_apple').unique().defaultTo('');
    table.string('email_gmail').unique().defaultTo('');
    table.specificType('hashed_password', 'char(60)').notNullable();
    table.integer('club_id')
      .references('id')
      .inTable('clubs')
      .onDelete('SET NULL')
      .index();
    table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
