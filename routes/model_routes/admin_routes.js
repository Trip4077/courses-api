const Admins = require( '../../models/table_models/admin_model' );
const utils = require( '../../util/router_utils' );
const router = require( 'express' ).Router();

router.get('/', async (_, res) => {
    try {
        const admins = await Admins.getDetails();

        res.status(200).json({ admins });
    } 
    
    catch(err) {
        console.log('----------' + err + '----------');

        res.status(500).json({ message: "Error Getting Admins", err });
    }
});

router.get('/:id', async (req, res) => {
    try {
        if( !utils.validateIdParam( req.params.id ) || !req.body) res.status(403).json({ message: "Invalid ID or Update", id: req.params.id, body: req.body });

        const [ admin ] = await Admins.getDetail( req.params.id );

        res.status(200).json({ admin });
    } 
    
    catch(err) {
        console.log('----------' + err + '----------');

        res.status(500).json({ message: "Error Getting Admins", err });
    }
});

router.post('/', async (req, res) => {
    try {
        const admin = req.body;

        const new_admin = await Admins.insert( admin );

        res.status(201).json({ message: "Admin Added Successfully", new_admin });
    } 
    
    catch(err) {
        console.log('----------' + err + '----------');

        res.status(500).json({ message: "Error Getting Admins", err });
    }
});

router.put('/:id', async (req, res) => {
    try {
        if( !utils.validateIdParam( req.params.id ) || !req.body) res.status(403).json({ message: "Invalid ID or Update", id: req.params.id, body: req.body });

        const updated_admin = await Admins.update( req.params.id, req.body );

        res.status(200).json({ message: "Admin Updated", updated_admin });
    } 
    
    catch(err) {
        console.log('----------' + err + '----------');

        res.status(500).json({ message: "Error Updating Admins", err });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        if( !utils.validateIdParam( req.params.id )) res.status(403).json({ message: "Invalid ID", id: req.params.id });

        const result = await Admins.remove( req.params.id );
    
        res.status(200).json({ message: `Admin:${req.params.id} removed`, result });
    } 
    
    catch(err) {
        console.log('----------' + err + '----------');

        res.status(500).json({ message: "Error Removing Unit", err });
    }
});

module.exports = router;