exports.up = function(knex) {
  return knex.schema.createTable( 'Units', tbl => {
      tbl.increments();

      tbl.string( 'title' ).notNullable();

      tbl.integer( 'course_id' ).notNullable()
                                .references( 'id' )
                                .inTable( 'Courses' )
                                .onDelete( 'CASCADE' )
                                .onUpdate( 'CASCADE' );
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists( 'Units' );  
};
