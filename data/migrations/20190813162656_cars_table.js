
exports.up = function(knex) {
  return knex.schema.createTable('fruits', tbl => {
      tbl.increments();

      tbl.string('make', 15).notNullable();
      tbl.string('model', 15).notNullable();
      tbl.decimal('milage')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
