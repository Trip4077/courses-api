const router = require( 'express' ).Router();
const program_routes = require( './model_routes/program_routes' );

router.get('/', async (_, res) => res.json({ message: "Server Running", code: 200, status: "OK" }));

router.use('/programs', program_routes);

module.exports = router;