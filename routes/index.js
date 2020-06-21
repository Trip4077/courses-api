const router = require( 'express' ).Router();

router.use('/', async (_, res) => res.json({ message: "Server Running", code: 200, status: "OK" }));

module.exports = router;