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

router.post('/', async (req, res) => {
    try {
        const message = req.body;

        const new_message = await Messages.insert( message );

        res.status(201).json({ message: "Messages Added Succesfully", new_message });
    }

    catch(err) {
        console.log('----------' + err + '----------');

        res.status(500).json({ message: "Error Getting Message", err });    
    }
});

router.put('/:id', async (req, res) => {
    try {
        if( !utils.validateIdParam( req.params.id )) res.status(403).json({ message: "Invalid ID", id: req.params.id });

        const updated_message = await Messages.update( req.params.id, req.body);

        res.status(200).json({ message: "Message Updated Successfully", updated_message });
    }

    catch(err) {
        console.log('----------' + err + '----------');

        res.status(500).json({ message: "Error Getting Message", err });   
    }
});

module.exports = router;