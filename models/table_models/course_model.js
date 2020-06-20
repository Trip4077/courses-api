const BaseModel = require( '../base_model' );
const db = require( '../../data/config' );

class Courses extends BaseModel {
    async getUnits( course_id ) {
        const courses = await db( this.name ).select( 'Courses.*', 'Units.title as unit_name', 'Units.id as unit_id' )
                                    .where({course_id})
                                    .innerJoin( 'Units', 'Courses.id', '=', 'Units.course_id' )

        for(let i = 0; i < courses.length; i++) {
            const materials = await db( 'Materials' ).where({ unit_id: courses[i].unit_id });

            courses[i].materials = materials;
        }
        
        return courses;
    }
}

module.exports = new Courses( 'Courses' );