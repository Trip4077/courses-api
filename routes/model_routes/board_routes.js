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

router.post('/', async (req, res) => {
    try {
        const board = req.body;

        const new_board = await Boards.insert( board );

        res.status(201).json({ message: "Board Added Successfully", new_board });
    } 
    
    catch(err) {
        console.log('----------' + err + '----------');

        res.status(500).json({ message: "Error Adding Board", err });
    }
});

router.put('/:id', async (req, res) => {
    try {
        if( !utils.validateIdParam( req.params.id ) || !req.body) res.status(403).json({ message: "Invalid ID or Update", id: req.params.id, body: req.body });

        const updated_board = await Boards.update( req.params.id, req.body );

        res.status(200).json({ message: "Board Updated Successfully", updated_board });
    }

    catch(err) {
        console.log('----------' + err + '----------');

        res.status(500).json({ message: "Error Adding Board", err });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        if( !utils.validateIdParam( req.params.id )) res.status(403).json({ message: "Invalid ID", id: req.params.id });

        const result = await Boards.remove( req.params.id );
    
        res.status(200).json({ message: `Board:${req.params.id} removed`, result });
    } 
    
    catch(err) {
        console.log('----------' + err + '----------');

        res.status(500).json({ message: "Error Removing Board", err });
    }
});

module.exports = router;