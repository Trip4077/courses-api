exports.up = function(knex) {
  return knex.schema.createTable( 'Programs', tbl => {
      tbl.increments();

      tbl.string( 'title' ).notNullable();
      tbl.string( 'description' ).notNullable();
      tbl.string( 'duration' ).notNullable();
      tbl.string( 'topic' )

      tbl.float( 'price' ).notNullable().defaultTo(99.99);

      tbl.integer( 'certificate_id' ).references( 'id' )
                                     .inTable( 'Certificates' )
                                     .onDelete( 'CASCADE' )
                                     .onUpdate( 'CASCADE' );
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists( 'Programs' );
};
