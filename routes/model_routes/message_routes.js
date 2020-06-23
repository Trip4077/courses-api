const Messages = require( '../../models/table_models/message_model' );
const utils = require( '../../util/router_utils' );
const router = require( 'express' ).Router();

router.get('/', async (_, res) => {
    try {
        const messages = await Messages.getAll();

        res.status(200).json({ messages });
    }

    catch(err) {
        console.log('----------' + err + '----------');

        res.status(500).json({ message: "Error Getting Messages", err });
    }
});

router.get('/:id', async (req, res) => {
    try {
        if( !utils.validateIdParam( req.params.id )) res.status(403).json({ message: "Invalid ID", id: req.params.id });

        const message = await Messages.getBy({ id: req.params.id });

        res.status(200).json({ message });
    }

    catch(err) {
        console.log('----------' + err + '----------');

        res.status(500).json({ message: "Error Getting Message", err });
    }
});

module.exports = router;