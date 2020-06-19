exports.up = function(knex) {
  return knex.schema.createTable( 'Certificates', tbl => {
    tbl.increments();

    tbl.string( 'title' ).notNullable();
    tbl.string( 'description' ).notNullable();
    // Certification Home Page or Information
    tbl.string( 'URL' ).notNullable().unique();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists( 'Certificates' );
};
