exports.up = function(knex) {
  return knex.schema.createTable( 'Instructors', tbl => {
    tbl.increments();

    tbl.integer( 'uid' ).notNullable();
    tbl.integer( 'course_id' ).references( 'id' )
                               .inTable( 'Courses' )
                               .onDelete( 'CASCADE' )
                               .onUpdate( 'CASCADE' );
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists( 'Instructors' );
};
