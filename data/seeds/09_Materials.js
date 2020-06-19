
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Materials').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Materials').insert([
        {
          id: 1,
          name: "What is EC2?",
          URL: "https://www.youtube.com/watch?v=TsRBftzZsQo",
          unit_id: 1
        },
        {
          id: 2,
          name: "What is DynamoDB",
          URL: "https://www.youtube.com/watch?v=sI-zciHAh-4",
          unit_id: 2
        }
      ]);
    });
};
