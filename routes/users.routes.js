const { Router } = require('express');
const { check } = require('express-validator');

const { isRolValid, existEmailDB, existUserByIdDB } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');

const {
	userGet,
	userPost,
	userDelete,
	userPatch,
	userPut,
} = require('../controllers/users.controllers');

const router = Router();

//definimos las rutas

router.get('/', userGet);
router.put(
	'/:id',
	[
		check('rol').custom(isRolValid),
		// Validamos si el id es de mongo
		check('id', 'No Es un ID Valido').isMongoId() /*  */,
		check('id').custom(existUserByIdDB),
		check('rol').custom(isRolValid),
		validarCampos,
	],
	userPut
);
router.post(
	'/',
	[
		//Validaciones del lado de las rutas
		check('nombre', 'El nombre es obligatorio').not().isEmpty(),
		check('password', 'Es password debe de ser mas de 6 letras').isLength({ min: 8 }),
		check('correo', 'El correo no es valido').isEmail(),
		check('correo', 'El correo no es valido').custom(existEmailDB),
		check('rol').custom(isRolValid),
		validarCampos,
	],
	// Controlador,
	userPost
);
router.delete(
	'/:id',
	[
		check('id', 'No es un Id Valido').isMongoId(),
		check('id').custom(existUserByIdDB),
		validarCampos,
	],
	userDelete
);
router.patch('/', userPatch);

module.exports = router;
