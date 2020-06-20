const BaseModel = require( '../base_model' );
const db = require( '../../data/config' );

class Admins extends BaseModel {
    async getPrograms( admin_id ) {
        return await db( this.name ).select( 'Admins.uid as uid', 'Admins.id as admin_id', 'Programs.*' )
                                    .innerJoin( 'Programs', 'Admins.program_id', '=', 'Programs.id' );
    }
}

module.exports = new Admins( 'Admins' );