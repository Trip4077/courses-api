exports.up = function(knex) {
  return knex.schema.createTable( 'Messages', tbl => {
    tbl.increments();

    tbl.string( 'content' ).notNullable();

    tbl.integer( 'uid' ).notNullable();
    tbl.integer( 'board_id' ).notNullable()
                             .references( 'id' )
                             .inTable( 'Boards' )
                             .onDelete( 'CASCADE' )
                             .onUpdate( 'CASCADE' );
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists( 'Messages' );
};
