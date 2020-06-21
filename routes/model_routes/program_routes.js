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

    } 
    
    catch( err ) {
        console.log(('-' * 10) + err + ('-' * 10));
    }
});

router.put('/:id', async ( req, res ) => {
    try {

    } 
    
    catch( err ) {
        console.log(('-' * 10) + err + ('-' * 10));
    }
})

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
})

module.exports = router;