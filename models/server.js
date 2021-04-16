const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');
class Server {
	constructor() {
		this.app = express();
		this.PORT = process.env.PORT;
		this.userPATH = '/api/users';
		this.authPATH = '/api/auth';
		this.ticketPATH = '/api/ticket';
		this.incidencePATH = '/api/incidence';

		//Conectar a base de dato
		this.database();
		// Middlewares
		this.middlewares();

		// Rutas de mi aplicacion
		this.routes();
	}

	async database() {
		await dbConnection();
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
		this.app.use(this.authPATH, require('../routes/auth.routes'));
		this.app.use(this.userPATH, require('../routes/users.routes'));
		this.app.use(this.ticketPATH, require('../routes/ticket.routes'));
		this.app.use(this.incidencePATH, require('../routes/incidence.routes'));
	}
	listen() {
		this.app.listen(this.PORT, () => {
			console.log(`Servidor en el puerto, ${this.PORT}`);
		});
	}
}

module.exports = Server;
