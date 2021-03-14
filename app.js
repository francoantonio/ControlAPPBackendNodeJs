require('dotenv').config();

const Server = require('./model/server');
const PORT = process.env.PORT;

const server = new Server();

server.listen();
