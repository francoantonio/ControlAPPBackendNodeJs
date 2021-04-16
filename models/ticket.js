const { Schema, model } = require('mongoose');

const TicketSchema = Schema({
	date: {
		type: Date,
		required: [true, 'La fecha es obligatorio'],
	},
	time: {
		type: String,
	},
	termial: {
		type: String,
		required: [true],
	},
	cobEfec: {
		type: Number,
	},
	cobEfecCant: {
		type: Number,
	},
	cobPei: {
		type: Number,
	},
	cobPeiCant: {
		type: Number,
	},
	cobPendEfect: {
		type: Number,
	},
	cobPendEfectCant: {
		type: Number,
	},
	cobPendPei: {
		type: Number,
	},
	cobPendPeiCant: {
		type: Number,
	},
	paidEfec: {
		type: Number,
	},
	paidEfecCant: {
		type: Number,
	},
	paidPei: {
		type: Number,
	},
	paidPeiCant: {
		type: Number,
	},
	totalGeneral: {
		type: Number,
		required: [true],
	},
	numberSecuencia: {
		type: Number,
		required: [true],
	},
});

module.exports = model('Ticket', TicketSchema);
