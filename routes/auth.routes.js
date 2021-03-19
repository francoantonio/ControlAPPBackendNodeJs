const { check } = require('express-validator');
const { Router } = require('express');

const { login } = require('../controllers/auth.controllers');
const { validarCampos } = require('../middlewares/validar-campos');

//definimos las rutas
const router = Router();

router.post(
	'/login',
	[
		check('correo', 'El Correo es obligatorios').isEmail(),
		check('password', 'La contraseña es obligatoria').notEmpty(),
		validarCampos,
	],
	login
);

module.exports = router;
