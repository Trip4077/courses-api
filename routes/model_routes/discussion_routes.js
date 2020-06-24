const Discussions = require( '../../models/table_models/discussion_model' );
const utils = require( '../../util/router_utils' );
const router = require( 'express' ).Router();

router.get('/', async (_, res) => {
    try {
        const discussions = await Discussions.getAll();

        res.status(200).json({ discussions });
    }

    catch(err) {
        console.log('----------' + err + '----------');

        res.status(500).json({ message: "Error Getting Discussions", err });
    }
});

router.get('/:id', async (req, res) => {
    try {
        if( !utils.validateIdParam( req.params.id )) res.status(403).json({ message: "Invalid ID", id: req.params.id });

        const [ discussion ] = await Discussions.getBy({ id: req.params.id });

        res.status(201).json({ discussion });
    }

    catch(err) {
        console.log('----------' + err + '----------');

        res.status(500).json({ message: "Error Getting Discussions", err });
    }
});

module.exports = router;