const { request, response } = require('express');
const isAdminRol = (req = request, res = response, next) => {
	if (!req.user) {
		return res.status(500).json('se quiere verificar el rol sin validar el token');
	}

	const { rol, nombre } = req.user;
	if (rol != 'ADMIN_ROLE') {
		return res.status(401).json('No tienes permiso de administrador');
	}

	next();
};

module.exports = { isAdminRol };
