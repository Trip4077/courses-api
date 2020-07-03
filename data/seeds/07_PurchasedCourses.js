
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('PurchasedCourses').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('PurchasedCourses').insert([
        {
          id: 1,
          uid: 1,
          course_id: 1
        },
        {
          id: 2,
          uid: 1,
          course_id: 2
        }
      ]);
    });
};