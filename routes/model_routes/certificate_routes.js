const Certificates = require( '../../models/table_models/certificate_model' );
const utils = require( '../../util/router_utils' );
const router = require( 'express' ).Router();

router.get('/', async (_, res) => {
    try {
        const certificates = await Certificates.getAll();

        res.status(200).json({ certificates });
    } catch(err) {
        console.log('----------' + err + '----------');

        res.status(500).json({ message: "Error Getting Certficates", err});
    }
});

router.get('/:id', async (req, res) => {
    try {
        if( !utils.validateIdParam( req.params.id )) res.status(403).json({ message: "Invalid ID", id: req.params.id });

        const [ certificate ] = await Certificates.getBy({ id: req.params.id });

        res.status(200).json({ certificate });
    } catch(err) {
        console.log('----------' + err + '----------');

        res.status(500).json({ message: "Error Getting Certficate", err});
    }
});

router.post('/', async (req, res) => {
    try {
        const certificate = req.body;

        const new_certificate = await Certificates.insert( certificate );

        res.status(201).json({ message: "Certificate Added Successfully", new_certificate });
    } catch(err) {
        console.log('----------' + err + '----------');

        res.status(500).json({ message: "Error Adding Certficate", err});
    }
});

module.exports = router;