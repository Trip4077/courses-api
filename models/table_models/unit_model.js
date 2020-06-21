const BaseModel = require( '../base_model' );

const db = require( '../../data/config' );

class Units extends BaseModel {
    async getUnitData( unit_id ) {
        const unit_materials = await db( 'Units' ).innerJoin('Materials', 'Units.id', '=', 'Materials.unit_id')
                                  .select('Units.*', 'Materials.name as materials_name', 'Materials.URL as materials_link')
                                  .where('Units.id', '=', `${unit_id}`)

        const unit_data = {
            id: unit_materials[0].id,
            title: unit_materials[0].title,
            course_id: unit_materials[0].course_id,
            materials: []
        }

        unit_materials.forEach(material => unit_data.materials.push({ name: material.materials_name, link: material.materials_link }));

        return unit_data;
    }
}

module.exports = new Units( 'Units' );