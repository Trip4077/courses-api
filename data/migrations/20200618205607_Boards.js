exports.up = function(knex) {
  return knex.schema.createTable( 'Boards', tbl => {
    tbl.increments();

    tbl.string( 'title' ).notNullable();
    tbl.string( 'label' ).notNullable();
    
    tbl.datetime('created_at').defaultTo(knex.fn.now());

    tbl.integer( 'uid' ).notNullable();
    tbl.integer( 'discussion_id' ).notNullable()
                                  .references( 'id' )
                                  .inTable( 'Discussions' )
                                  .onDelete( 'CASCADE' )
                                  .onUpdate( 'CASCADE' );
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableifExists( 'Boards' );
};