const AWS = require( 'aws-sdk' );
const fs = require( 'fs' );

AWS.config.update({
    region: process.env.AWS_REGION,  
    accessKeyId: process.env.accessKeyID,
    secretAccessKey: process.env.secretAccessKey 
});

s3 = new AWS.S3();

module.exports = {
    uploadMaterial: async ( material, instance ) => {
        const fileContent = fs.readFileSync( material.fileContent.path );

        const params = {
            Bucket: process.env.BUCKET,
            Key: material.fileContent.name, 
            Body: fileContent
        };

        s3.upload(params, async (err, data) => {
            if (err) throw err;
            
            const payload = { name: data.Key, URL: data.Location, unit_id: material.unit_id }
            const result = await instance.insert( payload );
           
            return result;
        });
    },
}