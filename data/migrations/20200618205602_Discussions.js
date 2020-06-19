exports.up = function(knex) {
  return knex.schema.createTable( 'Discussions', tbl => {
    tbl.increments();

    tbl.string( 'title' ).notNullable();
    
    tbl.datetime('created_at').defaultTo(knex.fn.now());

    tbl.integer( 'course_id' ).notNullable()
                              .references( 'id' )
                              .inTable( 'Courses' )
                              .onDelete( 'CASCADE' )
                              .onUpdate( 'CASCADE' );
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists( 'Discussions' );  
};
