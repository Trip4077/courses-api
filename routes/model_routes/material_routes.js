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

module.exports = router;