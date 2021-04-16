const { request, response } = require('express');
const reclamo = require('../models/reclamos');

const searchIncidence = async (req = request, res = response) => {
	const total = await reclamo.find();
	res.json(total);
};

const newIncidence = (req = request, res = response) => {
	const { body } = req;
	res.json({ msg: 'Todo Ok' });
	newreclamo = new reclamo(body);
	newreclamo.save();
};

const updateIncidence = async (req = request, res = response) => {
	try {
		const { id } = req.params;
		console.log(id);
		console.log(req.body);
		const update = await reclamo.findById(id);
		const campos = req.body;
		const reclamoUpdate = await update.update(campos, { new: true });
		res.json({
			reclamoUpdate,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Error Inesperado',
		});
	}
};

const eliminarIncidence = async (req = request, res = response) => {
	const { id } = req.params;

	const incidiencia = await reclamo.findByIdAndDelete(id);
	res.json({
		incidiencia,
	});
};
module.exports = {
	searchIncidence,
	newIncidence,
	updateIncidence,
	eliminarIncidence,
};
