const db = require( '../data/config' );

class BaseModel {
    constructor( name ) {
        this.name = name;
    }

    getAll() {
        return db( this.name );
    }

    getBy( filter ) {
        try {
            if( !filter ) throw Error( "No Filter Found" );

            return db( this.name ).where( filter );
        } catch(err) {
            console.log(('-' * 10) + err + ('-' * 10))
        }
    }

    async insert( data ) {
        if( !data ) throw Error( "No Data To Add" );

        await db( this.name ).insert( data );

        const items =  await db( this.name );

        return items[ items.length-1 ]
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