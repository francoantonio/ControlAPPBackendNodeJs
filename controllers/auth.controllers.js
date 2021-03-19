const { response, request } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/generarJWT');

const login = async (req = request, res = response) => {
	const { correo, password } = req.body;

	try {
		// Verificar si el correo existe
		const user = await Usuario.findOne({ correo });
		if (!user) {
			console.log(user);
			return res.status(400).json({
				Mesnaje: 'El corroe no existe',
			});
		}
		//Verificar si el usuario Esta activo

		user.estado
			? console.log('Usuario activo')
			: res.status(409).json({ mensaje: 'No Activo' });
		//verificar contraseña

		const valiPassword = bcryptjs.compareSync(String(password), user.password);
		!valiPassword ? res.status(409).json({ mensaje: 'contraseña' }) : console.log('paso');

		// generar JWT
		const token = await generarJWT(user.id);

		res.json({
			user,
			token,
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			mensaje: 'Algo salio mal',
		});
	}
};

module.exports = {
	login,
};
