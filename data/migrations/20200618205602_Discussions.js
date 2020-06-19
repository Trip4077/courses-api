exports.up = function(knex) {
  return knex.schema.createTable( 'Discussions', tbl => {
    tbl.increments();

    tbl.string( 'title' ).notNullable();
    
    tbl.datetime('created_at', { precision: 6 }).defaultTo(knex.fn.now(6));

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
