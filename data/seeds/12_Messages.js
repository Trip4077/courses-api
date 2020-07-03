
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
        },
        {
          id: 3,
          content: "One way is through the AWS management console.",
          uid: 1,
          board_id: 1,
          reply_to: 1
        },
        {
          id: 4,
          content: "Another way is programmatically through the AWS CLI",
          uid: 1,
          board_id: 1,
          reply_to: 1
        },
        {
          id: 5,
          content: "Unstructured and unpredictable data is one use-case.",
          uid: 1,
          board_id: 2,
          reply_to: 2 
        },
      ]);
    });
};
