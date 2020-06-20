const db = require( '../data/config' );

class BaseModel {
    constructor( name ) {
        this.name = name;
    }

    getAll() {
        return db( this.name );
    }

    getBy( filter ) {
        if( !filter ) throw Error( "No Filter Found" );

        return db( this.name ).where( filter ).first();
    }

    async insert( data ) {
        if( !data ) throw Error( "No Data To Add" );

        await db( this.name ).insert( data );

        return await db( this.name ).pop();
    }

    async update( id, data ) {
        if( !id || !data ) throw Error( "Can not complete request with provided values" );

        await db( this.name ).where({ id }).update( data );
      
        return await db( this.name ).where({ id }).first();
    }

    remove( id ) {
        if( !id ) throw Error( "No ID Found" );

        return db( this.name ).where({ id }).del();
    }
}

module.exports = BaseModel;