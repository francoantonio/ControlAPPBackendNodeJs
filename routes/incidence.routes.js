const { validarCampos } = require('../middlewares/validar-campos');
const { existUserByIdDB } = require('../helpers/db-validators');
const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const {
	searchIncidence,
	newIncidence,
	updateIncidence,
	eliminarIncidence,
} = require('../controllers/incidence.controllers');

router.get('/', searchIncidence);
router.post('/', newIncidence);
router.put(
	'/:id',
	[check('id', 'No es un Id Valido').isMongoId(), validarCampos],
	updateIncidence
);
router.delete(
	'/:id',
	[check('id', 'No es un Id Valido').isMongoId(), validarCampos],
	eliminarIncidence
);
module.exports = router;
