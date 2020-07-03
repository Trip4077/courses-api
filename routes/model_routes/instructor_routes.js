const Instructors = require( '../../models/table_models/instructor_model' );
const utils = require( '../../util/router_utils' );
const router = require( 'express' ).Router();

router.get('/', async (_, res) => {
    try {
        const instructors = await Instructors.getDetails();

        res.status(200).json({ instructors });
    } 

    catch(err) {
        console.log('----------' + err + '----------');

        res.status(500).json({ message: "Error Getting Instructors", err });
    }
});

router.get('/:id', async (req, res) => {
    try {
        if( !utils.validateIdParam( req.params.id )) res.status(403).json({ message: "Invalid ID", id: req.params.id });

        const instructor = await Instructors.getDetail( req.params.id );

        res.status(200).json({ instructor });
    } 

    catch(err) {
        console.log('----------' + err + '----------');

        res.status(500).json({ message: "Error Getting Instructor", err });
    }
});

router.post('/', async (req, res) => {
    try {
        const instructor = req.body;

        const new_instructor = await Instructors.insert( instructor );

        res.status(201).json({ message: "Instructor Added Successfully", new_instructor });
    } 
    
    catch(err) {
        console.log('----------' + err + '----------');

        res.status(500).json({ message: "Error Adding Instructor", err });
    }
});

router.put('/:id', async (req, res) => {
    try {
        if( !utils.validateIdParam( req.params.id ) || !req.body) res.status(403).json({ message: "Invalid ID or Update", id: req.params.id, body: req.body });

        const updated_instructor = await Instructors.update( req.params.id, req.body );

        res.status(200).json({ message: "Instructor Updated", updated_instructor });
    } 
    
    catch(err) {
        console.log('----------' + err + '----------');

        res.status(500).json({ message: "Error Updating Instructor", err });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        if( !utils.validateIdParam( req.params.id )) res.status(403).json({ message: "Invalid ID", id: req.params.id });

        const result = await Instructors.remove( req.params.id );
    
        res.status(200).json({ message: `Instructor:${req.params.id} removed`, result });
    } 
    
    catch(err) {
        console.log('----------' + err + '----------');

        res.status(500).json({ message: "Error Removing Instructor", err });
    }
});

module.exports = router;