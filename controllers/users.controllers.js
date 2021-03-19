const { response, request } = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');

const userGet = async (req = request, res = response) => {
	const { limit = 5, desde = 0 } = req.query;

	const [total, usuarios] = await Promise.all([
		// Utilizammos el Promise.all para ejecutar las promesas al mismo tiempo
		Usuario.countDocuments({ estado: true }), // Cantidad de elementos
		Usuario.find({ estado: true }).skip(Number(desde)).limit(Number(limit)),
	]);

	res.json({
		total,
		usuarios,
	});
};
// Rura POST USer
const userPost = async (req = request, res = response) => {
	// Obtenemos los valores del req.body
	const { nombre, correo, password, rol } = req.body;
	// instanciamos un Usuario con los valores anteriores
	const usuario = new Usuario({ nombre, correo, password, rol });

	//Encriptar la contraseña
	const salts = bcryptjs.genSaltSync();
	usuario.password = bcryptjs.hashSync(usuario.password, salts);

	//Guardar en DB
	await usuario.save();
	// Regresamos el Usuario Guardado
	res.json(usuario);
};

const userPut = async (req = request, res = response) => {
	const { id } = req.params;
	const { _id, password, google, correo, ...resto } = req.body;

	if (password) {
		//Encriptar la contraseña
		const salts = bcryptjs.genSaltSync();
		resto.password = bcryptjs.hashSync(password, salts);
	}
	const usuario = await Usuario.findByIdAndUpdate(id, resto);

	res.json({
		msg: 'put API - Controlador',
		id: id,
		usuario,
	});
};

const userDelete = async (req = request, res = response) => {
	const { id } = req.params;

	//Cambia el estado del usuario a FALSE
	const usuario = await Usuario.findByIdAndUpdate(id, { estado: false });

	res.json({ usuario });
};

module.exports = {
	userGet,
	userPost,
	userDelete,

	userPut,
};
