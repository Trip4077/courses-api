const db = require( '../data/config' );

class BaseModel {
    constructor( name ) {
        this.name = name;
    }

    getAll() {
        try {
            return db( this.name );
        } catch(err) {
            console.log('----------' + err + '----------');
        }
    }

    getBy( filter ) {
        try {
            if( !filter ) throw Error( "No Filter Found" );

            return db( this.name ).where( filter );
        } catch(err) {
            console.log('----------' + err + '----------');
        }
    }

    async insert( data ) {
        try {
            if( !data ) throw Error( "No Data To Add" );

            await db( this.name ).insert( data );
    
            const items =  await db( this.name );
    
            return items[ items.length-1 ]
        } catch(err) {
            console.log('----------' + err + '----------');
        }
    }

    async update( id, data ) {
        try {
            if( !id || !data ) throw Error( "Can not complete request with provided values" );

            await db( this.name ).where({ id }).update( data );
          
            return await db( this.name ).where({ id }).first();
        } catch (err) {
            console.log('----------' + err + '----------');
        }
    }

    remove( id ) {
        try {
            if( !id ) throw Error( "No ID Found" );

            return db( this.name ).where({ id }).del();
        } catch(err) {
            console.log('----------' + err + '----------');
        }
    }
}

module.exports = BaseModel;