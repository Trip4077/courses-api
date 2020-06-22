const Units = require( '../../models/table_models/unit_model' );
const utils = require( '../../util/router_utils' );
const router = require( 'express' ).Router();

router.get('/', async (_, res) => {
    try {
        const units = await Units.getUnitsWithData();
        
        res.status(200).json({ units });
    } catch(err) {
        console.log(('-' * 10) + err + ('-' * 10));

        res.status(500).json({ message: "Error Getting Units", err });
    }
});

router.get('/:id', async (req, res) => {
    try {
        if( !utils.validateIdParam( req.params.id )) res.status(403).json({ message: "Invalid ID", id: req.params.id });

        const unit = await Units.getUnitData( req.params.id );
        
        res.status(200).json({ unit });
    } catch(err) {
        console.log(('-' * 10) + err + ('-' * 10));

        res.status(500).json({ message: "Error Getting Unit", err });
    }
});

router.post('/', async (req, res) => {
    try {
        const unit = req.body;

        const new_unit = await Units.insert( unit );

        res.status(201).json({ new_unit });
    } catch(err) {
        console.log(('-' * 10) + err + ('-' * 10));

        res.status(500).json({ message: "Error Adding Unit", err });
    } 
});

router.put('/:id', async (req, res) => {
    try {
        if( !utils.validateIdParam( req.params.id ) || !req.body) res.status(403).json({ message: "Invalid ID or Update", id: req.params.id, body: req.body });

        const updated_unit = await Units.update( req.params.id, req.body );

        res.status(200).json({ message: "Unit Updated", updated_unit });
    } catch(err) {
        console.log(('-' * 10) + err + ('-' * 10));

        res.status(500).json({ message: "Error Updating Unit", err });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        if( !utils.validateIdParam( req.params.id )) res.status(403).json({ message: "Invalid ID", id: req.params.id });

        const result = await Units.remove( req.params.id );
    
        res.status(200).json({ message: `Unit:${req.params.id} removed`, result });
    } catch(err) {
        console.log(('-' * 10) + err + ('-' * 10));

        res.status(500).json({ message: "Error Removing Unit", err });
    }
})

module.exports = router;