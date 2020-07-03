const BaseModel = require( '../base_model' );
const db = require( '../../data/config' );

class Admins extends BaseModel {
    async getDetails() {
        try {
            return await db( this.name ).select( 'Admins.uid as uid', 'Admins.id as id', 'Programs.*', 'Programs.id as program_id' )
                                        .innerJoin( 'Programs', 'Admins.program_id', '=', 'Programs.id' );
        } 
        
        catch(err) {
            console.log('----------' + err + '----------');
        }
    }

    async getDetail( user_id ) {
        try {
            return await db(this.name).select( 'Admins.uid as uid', 'Admins.id as id', 'Programs.*', 'Programs.id as program_id' )
                                      .innerJoin( 'Programs', 'Admins.program_id', '=', 'Programs.id' )
                                      .where( 'Admins.uid', '=', `${user_id}` );
        } 
        
        catch(err) {
            console.log('----------' + err + '----------');
        }
    }
}

module.exports = new Admins( 'Admins' );