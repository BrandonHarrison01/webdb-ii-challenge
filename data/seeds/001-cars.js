
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: 12345, make: 'Toyota', model: 'Tacoma', milage: '12121'},
        {vin: 12351, make: 'Ferrari', model: 'Enzo', milage: '789'},
        {vin: 15652, make: 'Honda', model: 'Civic', milage: '1231311'}
      ]);
    });
};
