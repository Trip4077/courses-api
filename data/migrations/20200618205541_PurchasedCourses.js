exports.up = function(knex) {
  return knex.schema.createTable( 'PurchasedCourses', tbl => {
    tbl.increments();

    tbl.integer( 'uid' ).notNullable();
    tbl.integer( 'course_id' ).notNullable()
                              .references( 'id' )
                              .inTable( 'Courses' )
                              .onDelete( 'CASCADE' )
                              .onUpdate( 'CASCADE' );
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists( 'PurchasedCourses' );
};
