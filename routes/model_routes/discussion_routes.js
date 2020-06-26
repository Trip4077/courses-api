const Discussions = require( '../../models/table_models/discussion_model' );
const utils = require( '../../util/router_utils' );
const router = require( 'express' ).Router();

router.get('/', async (_, res) => {
    try {
        const discussions = await Discussions.getDetails();

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

        const [ discussion ] = await Discussions.getDetail( req.params.id );

        res.status(201).json({ discussion });
    }

    catch(err) {
        console.log('----------' + err + '----------');

        res.status(500).json({ message: "Error Getting Discussions", err });
    }
});

router.post('/', async (req, res) => {
    try {
        const discussion = req.body;

        const new_discussion = await Discussions.insert( discussion );

        res.status(201).json({ message: "Discussion Added Successfully", new_discussion });
    } 
    
    catch(err) {
        console.log('----------' + err + '----------');

        res.status(500).json({ message: "Error Adding Discussion", err });
    }
});

router.put('/:id', async (req, res) => {
    try {
        if( !utils.validateIdParam( req.params.id ) || !req.body) res.status(403).json({ message: "Invalid ID or Update", id: req.params.id, body: req.body });

        const updated_discussion = await Discussions.update( req.params.id, req.body );

        res.status(200).json({ message: "Discussion Updated Successfully", updated_discussion });
    }

    catch(err) {
        console.log('----------' + err + '----------');

        res.status(500).json({ message: "Error Updating Discussion", err });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        if( !utils.validateIdParam( req.params.id )) res.status(403).json({ message: "Invalid ID", id: req.params.id });

        const result = await Discussions.remove( req.params.id );
    
        res.status(200).json({ message: `Discussion:${req.params.id} removed`, result });
    } 
    
    catch(err) {
        console.log('----------' + err + '----------');

        res.status(500).json({ message: "Error Removing Discussion", err });
    }
});

module.exports = router;