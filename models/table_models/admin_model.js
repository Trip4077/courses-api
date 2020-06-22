const BaseModel = require( '../base_model' );
const db = require( '../../data/config' );

class Admins extends BaseModel {
    async getPrograms( admin_id ) {
        try {
            return await db( this.name ).select( 'Admins.uid as uid', 'Admins.id as admin_id', 'Programs.*' )
                                        .innerJoin( 'Programs', 'Admins.program_id', '=', 'Programs.id' );
        } catch(err) {
            console.log('----------' + err + '----------');
        }
    }
}

module.exports = new Admins( 'Admins' );