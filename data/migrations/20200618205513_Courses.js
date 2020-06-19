exports.up = function(knex) {
  return knex.schema.createTable( 'Courses', tbl => {
    tbl.increments();

    tbl.string( 'title' ).notNullable();
    tbl.string( 'description' ).notNullable();
    tbl.string( 'duration' ).notNullable();

    tbl.float( 'price' ).notNullable().defaultTo(99.99);

    tbl.integer( 'program_id' ).references( 'id' )
                               .inTable( 'Programs' )
                               .onDelete( 'CASCADE' )
                               .onUpdate( 'CASCADE' );

    tbl.integer( 'certificate_id' ).references( 'id' )
                                .inTable( 'Certificates' )
                                .onDelete( 'CASCADE' )
                                .onUpdate( 'CASCADE' );                          
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists( 'Courses' )
};
