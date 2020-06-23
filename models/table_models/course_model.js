const BaseModel = require( '../base_model' );
const Units = require( './unit_model' );
const Materials = require(  './material_model');
const db = require( '../../data/config' );
const router_utils = require('../../util/router_utils');

class Courses extends BaseModel {
    async getAllCourses() {
        try {
            const courses = await this.getAll();


            for(let i = 0; i < courses.length; i++) {
                const units = await Units.getBy({ course_id: courses[i].id });
                
                courses[i].units = units;
    
                for(let j = 0; j < courses[i].units.length; j++) {
                    courses[i].units[j] = await Units.getUnitData(courses[i].units[j].id);
                }
            }
    
            return courses;
        } 
        
        catch (err) {
            console.log('----------' + err + '----------');

            res.status(500).json({ message: `Error Getting Course:${course_id}` })
        }
    } 

    async getCourseById( course_id ) {
        try {
            const [ course ] = await this.getBy({ id: course_id });
            const units = await Units.getBy({ course_id });
       
            if( !course ) return {}
            course.units = units;

            for(let i = 0; i < course.units.length; i++) {
                course.units[i] = await Units.getUnitData( course.units[i].id );
            }

            return course;
        } 
        
        catch(err) {
            console.log('----------' + err + '----------');
        }
    }
}

module.exports = new Courses( 'Courses' );