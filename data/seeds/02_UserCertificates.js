
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('UserCertificates').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('UserCertificates').insert([
        {
          id: 1,
          URL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youracclaim.com%2Forg%2Famazon-web-services%2Fbadge%2Faws-certified-solutions-architect-associate&psig=AOvVaw1bx-HwJdk9wekP4lVs5HjQ&ust=1592667241789000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDLz_yZjuoCFQAAAAAdAAAAABAD",
          uid: 1,
          certificate_id: 1
        }
      ]);
    });
};
