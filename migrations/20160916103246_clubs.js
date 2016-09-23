'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('clubs', (table) => {
    table.increments();
    table.integer('team_id').unique();
    table.string('name');
    table.string('abbr')
    table.string('logo');
    table.string('kit');
    table.string('banner');
    table.string('stadium');
    table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('clubs');
};
