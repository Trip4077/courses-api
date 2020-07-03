exports.up = function(knex) {
  return knex.schema.createTable( 'Admins', tbl => {
    tbl.increments();

    tbl.integer( 'uid' ).notNullable();
    tbl.integer( 'program_id' ).notNullable()
                               .references( 'id' )
                               .inTable( 'Users' )
                               .onDelete( 'CASCADE' )
                               .onUpdate( 'CASCADE' );
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists( 'Admins' );
};
