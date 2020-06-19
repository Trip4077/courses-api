
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Units').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Units').insert([
        {
          id: 1,
          title: "Elastice Cloud Compute (EC2)",
          course_id: 1
        },
        {
          id: 2,
          title: "DynamoDB",
          course_id: 2
        }
      ]);
    });
};