
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.integer('vin').unique().notNullable();
      tbl.string('make', 15).notNullable();
      tbl.string('model', 15).notNullable();
      tbl.decimal('milage').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
