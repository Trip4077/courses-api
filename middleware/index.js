const helmet = require( 'helmet' );
const logger = require( 'morgan' );
const cors = require( 'cors' );
const express = require( 'express' );
const router = express.Router();

router.use(
    cors(),
    helmet(),
    logger('dev'),
    express.json()
)

module.exports = router;