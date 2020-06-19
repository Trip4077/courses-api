
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Boards').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Boards').insert([
        {
          id: 1,
          title: "EC2 Questions",
          label: "HELP",
          uid: 1,
          discussion_id: 1
        },
        {
          id: 2,
          title: "DynamoDB Questions",
          label: "HELP",
          uid: 1,
          discussion_id: 2
        }
      ]);
    });
};
