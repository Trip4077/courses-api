
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Courses').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Courses').insert([
        {
          id: 1,
          title: "Compute",
          description: "Covers the AWS Compute Services that appear on the Solutions Architect exam.",
          duration: "1 month",
          price: 25.00 
        },
        {
          id: 2,
          title: "Storage",
          description: "Covers the AWS Storage Services that appear on the Solutions Architect exam.",
          duration: "1 month",
          price: 25.00 
        }
      ]);
    });
};
