const BaseModel = require( '../base_model' );
const db = require( '../../data/config' );

class Units extends BaseModel {
    async getUnitsWithData() {
        try {
            const units = await this.getAll();

            for(let i = 0; i < units.length; i++) {
                units[i] = await this.getUnitData( units[i].id );
            }
    
            return units
        } catch(err) {
            console.log('----------' + err + '----------');
        }
    }

    async getUnitData( unit_id ) {
        try {
            const unit_materials = await db( 'Materials' ).where({ unit_id });
            const [ unit ] = await this.getBy({ id: unit_id });
    
            unit.materials = unit_materials;
    
            return unit;
        } catch(err) {
            console.log('----------' + err + '----------');
        }
    }
}

module.exports = new Units( 'Units' );