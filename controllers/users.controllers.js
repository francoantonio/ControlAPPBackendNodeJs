const { response, request } = require('express');

const userGet = (req = request, res = response) => {
	const { q, nombre, apikey } = req.query;

	res.json({
		msg: 'Get API - Controlador',
		q,
		nombre,
		apikey,
	});
};

const userPost = (req = request, res = response) => {
	const { nombre, edad } = req.body;

	res.json({
		msg: 'post API - Controlador',
		nombre: nombre,
		edad: edad,
	});
};

const userPut = (req = request, res = response) => {
	const { id } = req.params;
	console.log(id);
	res.json({
		msg: 'put API - Controlador',
		id: id,
	});
};

const userDelete = (req = request, res = response) => {
	res.json({
		msg: 'delete API - Controlador',
	});
};

const userPatch = (req = request, res = response) => {
	res.json({
		msg: 'patch API - Controlador',
	});
};

module.exports = {
	userGet,
	userPost,
	userDelete,
	userPatch,
	userPut,
};
