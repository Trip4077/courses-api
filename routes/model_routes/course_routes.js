const Courses = require( '../../models/table_models/course_model' );
const utils = require( '../../util/router_utils' );
const router = require( 'express' ).Router();

router.get('/', async (_, res) => {
    try {
        const courses = await Courses.getAllCourses();
        
        res.status(200).json({ courses });
    } 
    
    catch(err) {
        console.log('----------' + err + '----------');

        res.status(500).json({ message: "Error Getting Courses", err });
    }
});

router.get('/:id', async (req, res) => {
    try {
        if( !utils.validateIdParam( req.params.id )) res.status(403).json({ message: "Invalid ID", id: req.params.id });

        const course = await Courses.getCourseById(req.params.id);

        res.status(200).json({ course });
    } 
    
    catch(err) {
        console.log('----------' + err + '----------');

        res.status(500).json({ message: "Error Getting Courses", err });
    }
});

router.post('/', async (req, res) => {
    try {
        const course = req.body;

        const new_course = await Courses.insert( course );

        res.status(201).json({ new_course });
    } 
    
    catch(err) {
        console.log('----------' + err + '----------');

        res.status(500).json({ message: "Error Adding Courses", err });
    }
});

router.put('/:id', async (req, res) => {
    try {
        if( !utils.validateIdParam( req.params.id ) || !req.body) res.status(403).json({ message: "Invalid ID or Update", id: req.params.id, body: req.body });

        const updated_course = await Courses.update( req.params.id, req.body );

        res.status(200).json({ message: "Course Updated", updated_course });
    } 
    
    catch(err) {
        console.log('----------' + err + '----------');

        res.status(500).json({ message: "Error Updating Course", err });
    }
})

router.delete('/:id', async (req, res) => {
    try {
        if( !utils.validateIdParam( req.params.id )) res.status(403).json({ message: "Invalid ID", id: req.params.id });

        const result = await Courses.remove( req.params.id );
    
        res.status(200).json({ message: `Course:${req.params.id} removed`, result });
    } 
    
    catch(err) {
        console.log('----------' + err + '----------');

        res.status(500).json({ message: "Error Removing Course", err });
    }
})

module.exports = router;