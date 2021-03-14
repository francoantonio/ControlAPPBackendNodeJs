const express = require('express');
const cors = require('cors');
class Server {
	constructor() {
		this.app = express();
		this.PORT = process.env.PORT;
		this.userPATH = '/api/users';

		// Middlewares
		this.middlewares();

		// Rutas de mi aplicacion
		this.routes();
	}

	middlewares() {
		// CORS
		this.app.use(cors());
		// Directorio publico
		this.app.use(express.static('public'));
		// Aceptamos formatos Json en el body
		this.app.use(express.json());
	}

	routes() {
		this.app.use(this.userPATH, require('../routes/users.routes'));
	}
	listen() {
		this.app.listen(this.PORT, () => {
			console.log(`Servidor en el puerto, ${this.PORT}`);
		});
	}
}

module.exports = Server;
