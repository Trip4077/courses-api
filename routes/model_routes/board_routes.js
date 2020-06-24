const Boards = require( '../../models/table_models/board_model' );
const utils = require( '../../util/router_utils' );
const router = require( 'express' ).Router();

router.get('/', async (_, res) => {
    try {
        const boards = await Boards.getAll();

        res.status(200).json({ boards });
    }

    catch(err) {
        console.log('----------' + err + '----------');

        res.status(500).json({ message: "Error Getting Boards", err });
    }
});

router.get('/:id', async (req, res) => {
    try {
        if( !utils.validateIdParam( req.params.id )) res.status(403).json({ message: "Invalid ID", id: req.params.id });

        const [ board ] = await Boards.getBy({ id: req.params.id });

        res.status(200).json({ board });
    }

    catch(err) {
        console.log('----------' + err + '----------');

        res.status(500).json({ message: "Error Getting Board", err });
    }
});

module.exports = router;