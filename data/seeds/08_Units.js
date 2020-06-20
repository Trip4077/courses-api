
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
          title: "Virtual Private Network (VPC)",
          course_id: 1
        },
        {
          id: 3,
          title: "DynamoDB",
          course_id: 2
        },
        {
          id: 4,
          title: "S3",
          course_id: 2
        }
      ]);
    });
};