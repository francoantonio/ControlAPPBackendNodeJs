const { Schema, model } = require('mongoose');

const reclamosSchema = Schema({
	reclamo: {
		type: String,
		require: [true, 'El numero de reclamo es Obligatorio'],
	},
	date: {
		type: Date,
		required: [true, 'La fecha es obligatorio'],
	},
	terminal: {
		type: String,
		require: [true],
	},
	observations: {
		type: String,
		require: [true],
	},
	state: {
		type: String,
		require: [true],
	},
	agente: {
		type: String,
		require: [true],
	},
	solucion: {
		type: String,
	},
});

module.exports = model('reclamo', reclamosSchema);
