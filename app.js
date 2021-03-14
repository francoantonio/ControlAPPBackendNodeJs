require('dotenv').config();

const Server = require('./models/server');
const PORT = process.env.PORT;

const server = new Server();

server.listen();
