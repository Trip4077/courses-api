const BaseModel = require( '../base_model' );
const Units = require( './unit_model' );
const Materials = require(  './material_model');
const db = require( '../../data/config' );

class Courses extends BaseModel {
    async getAllCourses() {
        const courses = await this.getAll();

        for(let i = 0; i < courses.length; i++) {
            const units = await Units.getBy({ course_id: courses[i].id });
            courses[i].units = units;
        }

        return courses;
    }
}

module.exports = new Courses( 'Courses' );