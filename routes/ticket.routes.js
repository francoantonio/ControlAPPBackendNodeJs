const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

const {
	newTicket,
	searchTicket,
	deleteTicket,
	searchTicketForId,
} = require('../controllers/ticket.controllers');

router.post('/', newTicket);
router.get('/', searchTicket);
router.delete(
	'/:id',
	[check('id', 'No es un Id Valido').isMongoId(), validarCampos],
	deleteTicket
);
router.get(
	'/:id',
	[check('id', 'No es un Id Valido').isMongoId(), validarCampos],
	searchTicketForId
);
module.exports = router;
