
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Admins').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Admins').insert([
        {
          id: 1,
          uid: 1,
          program_id: 1
        }
      ]);
    });
};
