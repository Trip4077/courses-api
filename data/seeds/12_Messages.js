
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Messages').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Messages').insert([
        {
          id: 1,
          content: "How do I start an EC2 instance?",
          uid: 1,
          board_id: 1 
        },
        {
          id: 2,
          content: "When should I use DynamoDB?",
          uid: 1,
          board_id: 2 
        }
      ]);
    });
};
