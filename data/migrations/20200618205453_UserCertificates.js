exports.up = function(knex) {
  return knex.schema.createTable( 'UserCertificates', tbl => {
    tbl.increments();

    tbl.integer( 'uid' ).notNullable();
    tbl.integer( 'certificate_id' ).notNullable()
                                   .references( 'id' )
                                   .inTable( 'Certificates' )
                                   .onDelete( 'CASCADE' )
                                   .onUpdate( 'CASCADE' );
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists( 'UserCertificates' );
};
