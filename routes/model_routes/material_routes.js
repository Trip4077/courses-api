const Materials = require( '../../models/table_models/material_model' );
const utils = require( '../../util/router_utils' );
const router = require( 'express' ).Router();

router.get('/', async (_, res) => {
    try {
        const materials = await Materials.getAll();

        res.status(200).json({ materials });
    } catch(err) {
        console.log(('-' * 10) + err + ('-' * 10));

        res.status(500).json({ message: "Error Getting Materials", err });
    }
});

router.get('/:id', async (req, res) => {
    try {
        if( !utils.validateIdParam( req.params.id )) res.status(403).json({ message: "Invalid ID", id: req.params.id });

        const material = await Materials.getBy({ id: req.params.id });

        res.status(200).json({ material });
    } catch(err) {
        console.log(('-' * 10) + err + ('-' * 10));

        res.status(500).json({ message: "Error Getting Material", err });
    }
});

router.post('/', async (req, res) => {
    try {
        const material = req.body;

        const new_material = await Materials.insert( material );

        res.status(201).json({ new_material });
    } catch(err) {
        console.log(('-' * 10) + err + ('-' * 10));

        res.status(500).json({ message: "Error Adding Materials", err });
    }
})

router.put('/:id', async (req, res) => {
    try {
        if( !utils.validateIdParam( req.params.id ) || !req.body) res.status(403).json({ message: "Invalid ID or Update", id: req.params.id, body: req.body });

        const updated_material = await Materials.update( req.params.id, req.body );

        res.status(200).json({ message: "Material Updated", updated_material });
    } catch(err) {
        console.log(('-' * 10) + err + ('-' * 10));

        res.status(500).json({ message: "Error Updating Material", err });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        if( !utils.validateIdParam( req.params.id )) res.status(403).json({ message: "Invalid ID", id: req.params.id });

        const result = await Materials.remove( req.params.id );
    
        res.status(200).json({ message: `Material:${req.params.id} removed`, result });
    } catch(err) {
        console.log(('-' * 10) + err + ('-' * 10));

        res.status(500).json({ message: "Error Removing Material", err });
    }
})

module.exports = router;