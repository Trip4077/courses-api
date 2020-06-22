const BaseModel = require( '../base_model' );
const db = require( '../../data/config' );

class Units extends BaseModel {
    async getUnitsWithData() {
        const units = await this.getAll();

        for(let i = 0; i < units.length; i++) {
            units[i] = await this.getUnitData( units[i].id );
        }

        return units
    }

    async getUnitData( unit_id ) {
        const unit_materials = await db( 'Materials' ).where({ unit_id });
        const [ unit ] = await this.getBy({ id: unit_id });

        console.log(unit_materials, unit)
        unit.materials = unit_materials;

        return unit;
    }
}

module.exports = new Units( 'Units' );