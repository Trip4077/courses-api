exports.up = function(knex) {
  return knex.schema.createTable( 'Admins', tbl => {
    tbl.increments();

    tbl.integer( 'uid' ).notNullable();
    tbl.integer( 'program_id' ).notNullable()
                               .references( 'id' )
                               .inTable( 'Programs' )
                               .onDelete( 'CASCADE' )
                               .onUpdate( 'CASCADE' );
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists( 'Admins' );
};
