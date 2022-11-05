const http = require('http');
// const { port } = require('./config')
const port = 8000;
const app = require('./app')

const server = http.createServer(app);

server.listen(port);