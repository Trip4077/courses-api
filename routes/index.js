const router = require( 'express' ).Router();

const program_routes = require( './model_routes/program_routes' );
const course_routes = require( './model_routes/course_routes' );
const unit_routes = require( './model_routes/unit_routes' );
const material_routes = require( './model_routes/material_routes' );

router.get('/', async (_, res) => res.json({ message: "Server Running", code: 200, status: "OK" }));

router.use('/programs', program_routes);
router.use('/courses', course_routes);
router.use('/units', unit_routes);
router.use('/materials', material_routes);

module.exports = router;