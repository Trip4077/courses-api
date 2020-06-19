
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Discussions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Discussions').insert([
        {
          id: 1,
          title: "AWS Compute Questions",
          course_id: 1 
        },
        {
          id: 2,
          title: "AWS Storage Questions",
          course_id: 2 
        }
      ]);
    });
};
