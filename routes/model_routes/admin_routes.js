const Admins = require( '../../models/table_models/admin_model' );
const utils = require( '../../util/router_utils' );
const router = require( 'express' ).Router();

router.get('/', async (_, res) => {
    try {
        const admins = await Admins.getDetails();

        res.status(200).json({ admins });
    } catch(err) {
        console.log('----------' + err + '----------');

        res.status(500).json({ message: "Error Getting Admins", err });
    }
});

router.get('/:id', async (req, res) => {
    try {
        if( !utils.validateIdParam( req.params.id ) || !req.body) res.status(403).json({ message: "Invalid ID or Update", id: req.params.id, body: req.body });

        const [ admin ] = await Admins.getDetail( req.params.id );

        res.status(200).json({ admin });
    } catch(err) {
        console.log('----------' + err + '----------');

        res.status(500).json({ message: "Error Getting Admins", err });
    }
});

module.exports = router;