const BaseModel = require( '../base_model' );
const Bucket = require( '../../aws/s3-connect' );

class Materials extends BaseModel {
    async insertMaterial( material ) {
        try {
            await Bucket.uploadMaterial( material, this );

            return { message: "Upload Successful", err: null }
        } catch(err) {
            return { message: "Upload Failed", err }
        }
    }
}

module.exports = new Materials( 'Materials' );