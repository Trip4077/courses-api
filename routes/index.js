const router = require( 'express' ).Router();

const program_routes = require( './model_routes/program_routes' );
const course_routes = require( './model_routes/course_routes' );
const unit_routes = require( './model_routes/unit_routes' );
const material_routes = require( './model_routes/material_routes' );
const certificate_routes = require( './model_routes/certificate_routes' );
const admin_routes = require( './model_routes/admin_routes' );
const instructor_routes = require( './model_routes/instructor_routes' );
const message_routes = require( './model_routes/message_routes' );
const board_routes = require( './model_routes/board_routes' );

router.get('/', async (_, res) => res.json({ message: "Server Running", code: 200, status: "OK" }));

router.use('/programs', program_routes);
router.use('/courses', course_routes);
router.use('/units', unit_routes);
router.use('/materials', material_routes);
router.use('/certificates', certificate_routes);
router.use('/admins', admin_routes);
router.use('/instructors', instructor_routes);
router.use('/messages', message_routes);
router.use('/boards', board_routes);

module.exports = router;