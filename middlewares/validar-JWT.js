const { request, response } = require('express');
const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuario');

const validarJWT = async (req = request, res = response, next) => {
	const token = req.header('token');
	if (!token) {
		return res.status(401).json({
			mensaje: 'No hay token en la peticion',
		});
	}
	console.log(token);

	try {
		const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

		// leer el usuario que corresponde al uid

		const usuario = await Usuario.findById(uid);
		if (!usuario) {
			return res.status(401).json('Token no valido');
		}

		if (!usuario.estado) {
			return res.status(401).json('Token no valido');
		}

		req.user = usuario;
		next();
	} catch (err) {
		console.log('errors');
		console.log(err);
		res.status(401).json('no hay token');
	}
};

module.exports = {
	validarJWT,
};
