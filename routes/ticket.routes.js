const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { newTicket, searchTicket } = require('../controllers/ticket.controllers');

router.post('/', newTicket);
router.get('/', searchTicket);

module.exports = router;
