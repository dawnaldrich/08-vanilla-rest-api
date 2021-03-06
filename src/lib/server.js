'use strict';

const http = require('http');

const Router = require('./router');

const router = new Router();
require('../route/route-frog')(router);

console.log(router, 'ROUTER IN SERVER');

// Application setup
const app = http.createServer(router.route());

const server = module.exports = {};
server.start = (port, callback) => app.listen(port, callback);
server.stop = callback => app.close(callback);

