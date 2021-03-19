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
	const total = await ticket.find({ termial: 'A13491' });
	res.json(total);
};

module.exports = { newTicket, searchTicket };
