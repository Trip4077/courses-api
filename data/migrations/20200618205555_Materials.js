exports.up = function(knex) {
  return knex.schema.createTable( 'Materials', tbl => {
    tbl.increments();

    tbl.string( 'name' ).notNullable();
    tbl.string( 'URL' ).notNullable();

    tbl.integer( 'unit_id' ).notNullable()
                            .references( 'id' )
                            .inTable( 'Units' )
                            .onDelete( 'CASCADE' )
                            .onUpdate( 'CASCADE' );
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists( 'Materials' );
};
