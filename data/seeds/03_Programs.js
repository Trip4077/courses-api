
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Programs').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Programs').insert([
        {
          id: 1,
          title: "AWS Solutions Architect Trainging",
          description: "Training for the AWS Solutions Architect certficiation exam.",
          duration: "2 months",
          topic: "Cloud",
          price: 45.00,
          certificate_id: 1
        }
      ]);
    });
};