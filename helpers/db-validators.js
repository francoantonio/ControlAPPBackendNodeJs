const Role = require('../models/rol');
const Usuario = require('../models/usuario');

const isRolValid = async (rol = '') => {
	const existeRol = await Role.findOne({ rol });

	if (!existeRol) {
		throw new Error(`El rol ${rol} No esta Registrado en la DB`);
	}
};

const existEmailDB = async (correo = '') => {
	// Veriricar si el correo existe
	const existeEmail = await Usuario.findOne({ correo });

	if (existeEmail) {
		throw new Error(`El correo: ${correo} ya existe en la DB`);
	}
};
const existUserByIdDB = async (id = '') => {
	// Veriricar si el id existe
	const existeId = await Usuario.findById(id);

	if (!existeId) {
		throw new Error(`El ID: ${id} No corresponde a un usuario valido`);
	}
};
module.exports = {
	isRolValid,
	existEmailDB,
	existUserByIdDB,
};
