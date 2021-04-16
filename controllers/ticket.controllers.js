const { request, response } = require('express');
const ticket = require('../models/ticket');

const newTicket = (req = request, res = response) => {
	const { body } = req;
	console.log(body);
	res.json({
		msn: 'TOdo ok',
	});
	ticketnuevo = new ticket(body);
	ticketnuevo.save();
};

const searchTicket = async (req = request, res = response) => {
	const { body } = res;
	console.log(body);
	const total = await ticket.find();
	res.json(total);
};

const deleteTicket = async (req = request, res = response) => {
	const { id } = req.params;
	const ticketDelete = await ticket.findByIdAndDelete(id);
	res.json({
		msg: 'Registro eliminado correctamente',
		ticketDelete,
	});
};

const searchTicketForId = async (req = request, res = response) => {
	const { id } = req.params;
	const ticketId = await ticket.findById(id);
	res.json(ticketId);
};
module.exports = {
	newTicket,
	searchTicket,
	deleteTicket,
	searchTicketForId,
};

//
// Dns checker
