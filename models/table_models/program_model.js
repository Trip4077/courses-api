const BaseModel = require( '../base_model' );
const db = require( '../../data/config' );

class Programs extends BaseModel {
    async getFullProgram( program_id ) {
        return await db( this.name ).select(
                                                'Programs.id as id',
                                                'Programs.title as program', 
                                                'Programs.description as program_details', 
                                                'Programs.price as program_price', 
                                                'Programs.duration as program_length', 
                                                'Programs.topic as topic', 
                                                'Courses.title as course', 
                                                'Courses.description as course_details', 
                                                'Courses.price as course_price', 
                                                'Courses.duration as course_length', 
                                                'Certificates.URL as certificate',
                                                'Instructors.uid as instructor'
                                            )
                                            .where('Programs.id', '=', `${program_id}`)
                                            .innerJoin(
                                                        'Courses', 'Programs.id', '=', 'Courses.program_id'
                                                      )
                                            .innerJoin(
                                                        'Certificates', 'Programs.certificate_id', '=', 'Certificates.id'
                                                      )
                                            .innerJoin(
                                                        'Instructors', 'Courses.instructor_id', '=', 'Instructors.id'
                                                      );
    }

    async getCourses( program_id ) {
        return await db( this.name ).select(
                                                'Programs.title as program',
                                                'Courses.*',
                                                'Instructors.id as instructor_id'
                                            )
                                    .where( 'Programs.id', '=', `${program_id}` )
                                    .innerJoin( 'Courses', 'Programs.id', '=', 'Courses.program_id' )
                                    .innerJoin( 'Certificates', 'Courses.certificate_id', '=', 'Certificates.id' )
                                    .innerJoin( 'Instructors', 'Courses.instructor_id', '=', 'Instructors.id' );;
    }
}

module.exports = new Programs( 'Programs' );