const BaseModel = require( '../base_model' );
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
          const courses = await this.getAllCourses( programs[i].program_id );

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

        program.courses = await this.getAllCourses( program_id );

        return program;
    }

    async getAllCourses( program_id ) {
        const courses = await db( 'Courses' ).where({ program_id });

        if( !courses ) return []
        else return courses;
    }

    async insertCertificate( title, description, URL ) {
      await db( 'Certificates' ).insert({ title, description, URL })

      const certificates = await db('Certificates')

      return certificates[ certificates.length-1 ]
    }

    async insertAdmin( uid, program_id ) {
      return await db( 'Admins' ).insert({ uid, program_id })
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
      const certificate = await this.insertCertificate( data.certificate_title, data.certificate_description, data.certificate_URL );
    
      await db( this.name ).insert({ 
                                    title: data.program_title,
                                    description: data.program_description,
                                    price: data.program_price,
                                    topic: data.program_topic,
                                    duration: data.program_duration,
                                    certificate_id: certificate.id
                                  })

      const programs = await db( this.name )
      const program = programs[ programs.length-1 ]

      await this.insertAdmin( data.admin_id, program.id );

      return program;
    }

    insert() {
      console.log("Please Use Insert New Program")
    }

    async removeProgram( certificate_id, program_id ) {
      await db('Certificates').where({ id: certificate_id }).del();
      await db('Admins').where({ program_id }).del();

      return await db( this.name ).where({ id: program_id }).del();
    }
}

module.exports = new Programs( 'Programs' );