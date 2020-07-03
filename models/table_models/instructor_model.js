const BaseModel = require( '../base_model' );
const db = require( '../../data/config' );

class Instructors extends BaseModel {
    async getDetails() {
        try {
            return await db( this.name ).select( 'Instructors.*', 'Courses.*' )
                                        .innerJoin( 'Courses', 'Instructors.course_id', '=', 'Courses.id' );
        }

        catch(err) {
            console.log('----------' + err + '----------');
        }
    }

    async getDetail( user_id ) {
        try {
            return await db( this.name ).select( 'Instructors.*', 'Courses.*' )
                                        .innerJoin( 'Courses', 'Instructors.course_id', '=', 'Courses.id' )
                                        .where( 'Instructors.uid', '=', `${user_id}` );
        }

        catch(err) {
            console.log('----------' + err + '----------');
        }
    }
}

module.exports = new Instructors( 'Instructors' );