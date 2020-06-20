const BaseModel = require( '../base_model' );
const Admins = require( './admin_model' );
const Courses = require( './course_model' );
const Certificates = require( './certificate_model' );
const db = require( '../../data/config' );

class Programs extends BaseModel {
    async getAllPrograms() {
        const programs = await db( this.name ).select(
                                                'Programs.id as program_id',
                                                'Programs.title as program_name', 
                                                'Programs.description as program_desc', 
                                                'Programs.price as program_price', 
                                                'Programs.duration as program_length', 
                                                'Programs.topic as program_topic', 
                                                'Certificates.title as certificate_name',
                                                'Certificates.URL as certificate_link',
                                            )
                                            .innerJoin( 'Certificates', 'Programs.certificate_id', '=', 'Certificates.id' )

        for(let i = 0; i < programs.length; i++) {
          const courses = await Courses.getBy({ program_id: programs[i].program_id });

          programs[i].courses = courses;
        }

        return programs;
    }

    async getProgramById( program_id ) {
        const program = await db( this.name ).select(
                                                      'Programs.id as program_id',
                                                      'Programs.title as program_name', 
                                                      'Programs.description as program_desc', 
                                                      'Programs.price as program_price', 
                                                      'Programs.duration as program_length', 
                                                      'Programs.topic as program_topic', 
                                                      'Certificates.title as certificate_name',
                                                      'Certificates.URL as certificate_link',
                                                    )
                                                    .where({ program_id })
                                                    .innerJoin( 'Certificates', 'Programs.certificate_id', '=', 'Certificates.id' )
                                                    .first();

        if( !program ) return {}

        program.courses = await Courses.getBy({ program_id: program.program_id });

        return program;
    }

    /*
      { 
        admin_id, 
        certificate_URL, 
        certificate_title, 
        certificate_description,
        program_title,
        program_description,
        program_price,
        program_topic,
        program_duration
      }
    */

    async insertNewProgram( data ) {
      const certificate = await Certificates.insert({ 
                                  title: data.certificate_title, 
                                  description: data.certificate_description, 
                                  URL: data.certificate_URL
                                });

      await this.insert({ 
                          title: data.program_title,
                          description: data.program_description,
                          price: data.program_price,
                          topic: data.program_topic,
                          duration: data.program_duration,
                          certificate_id: certificate.id
                        });

      const programs = await this.getAll();
      const program = programs[ programs.length-1 ]

      await Admins.insert({ uid: data.admin_id, program_id: program.id });

      return program;
    }

    async removeProgram( certificate_id, program_id ) {
      await db('Certificates').where({ id: certificate_id }).del();
      await db('Admins').where({ program_id }).del();

      return await db( this.name ).where({ id: program_id }).del();
    }
}

module.exports = new Programs( 'Programs' );