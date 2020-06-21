const Programs = require( '../../models/table_models/program_model' );
const utils = require( '../../util/router_utils' );
const router = require( 'express' ).Router();


router.get('/', async (_, res) => {
    try {
        const programs = await Programs.getAllPrograms();

        res.status( 200 ).json({ programs });
    } 
    
    catch(err) {
        console.log(('-' * 10) + err + ('-' * 10));

        res.status(500).json({ message: "Error Getting Programs", err });
    }
})

router.get('/:id', async (req, res) => {
    try {
        if( !utils.validateIdParam( req.params.id )) res.status( 403 ).json({ message: "Invalid ID", id: req.params.id });

        const program = await Programs.getProgramById( req.params.id );

        res.status(200).json({ program });
    } 
    
    catch(err) {
        console.log(('-' * 10) + err + ('-' * 10));

        res.status(500).json({ message: "Error Getting Program", err });
    }
});

router.post('/', async ( req, res ) => {
    try {
        const program = req.body;

        const new_program = await Programs.insertNewProgram( program );

        res.status(201).json({ message: "Program Created Successfully", new_program });
    } 
    
    catch( err ) {
        console.log(('-' * 10) + err + ('-' * 10));

        res.status(500).json({ message: "Program Could Not Be Created", err });
    }
});

router.put('/:id', async ( req, res ) => {
    try {
        if( !utils.validateIdParam( req.params.id ) || !req.body) res.status(403).json({ message: "Invalid ID or Update", id: req.params.id, body: req.body });

        const updated_program = await Programs.update( req.params.id, req.body );

        res.status(201).json({ message: "Program Updated", updated_program });
    } 
    
    catch( err ) {
        console.log(('-' * 10) + err + ('-' * 10));

        res.status(500).json({ message: "Program Could Not Be Updated", err });
    }
});

router.delete('/:id', async ( req, res ) => {
    try {
        if( !utils.validateIdParam( req.params.id )) res.status( 403 ).json({ message: "Invalid ID", id: req.params.id });

        const result = await Programs.remove( req.params.id );

        res.status(200).json({ message: `Program:${req.params.id} removed`, result });
    } 

    catch( err ) {
        console.log(('-' * 10) + err + ('-' * 10));

        res.status(500).json({ message: `Error Deleting Program:${req.params.id}` });
    }
});

module.exports = router;