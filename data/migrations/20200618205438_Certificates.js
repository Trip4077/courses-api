exports.up = function(knex) {
  return knex.schema.createTable( 'Certificates', tbl => {
    tbl.increments();

    tbl.string( 'title' ).notNullabe();
    tbl.string( 'name' ).notNullabe();
    tbl.string( 'description' ).notNullabe();
    tbl.string( 'URL' ).notNullabe().unique();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists( 'Certificates' );
};
