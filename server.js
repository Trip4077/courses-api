const server = require( 'express' )();
const middleware = require( './middleware' );
const routes = require( './routes' );

server.use( middleware );
server.use( routes );

module.exports = server;

