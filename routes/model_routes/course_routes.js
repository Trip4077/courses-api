const Courses = require( '../../models/table_models/course_model' );
const utils = require( '../../util/router_utils' );
const router = require( 'express' ).Router();

router.get('/', async (_, res) => {
    try {
        const courses = await Courses.getAllCourses();
        
        res.status(200).json({ courses });
    } catch(err) {
        console.log(('-' * 10) + err + ('-' * 10));

        res.status(500).json({ message: "Error Getting Courses", err });
    }
});

router.get('/:id', async (req, res) => {
    try {
        if( !utils.validateIdParam( req.params.id )) res.status(403).json({ message: "Invalid ID", id: req.params.id });

        const course = await Courses.getCourseById(req.params.id);

        res.status(200).json({ course });
    } catch(err) {
        console.log(('-' * 10) + err + ('-' * 10));

        res.status(500).json({ message: "Error Getting Courses", err });
    }
});

module.exports = router;