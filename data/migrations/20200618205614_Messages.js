exports.up = function(knex) {
  return knex.schema.createTable( 'Messages', tbl => {
    tbl.increments();

    tbl.string( 'content' ).notNullable();
    tbl.datetime('created_at').defaultTo(knex.fn.now());

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
