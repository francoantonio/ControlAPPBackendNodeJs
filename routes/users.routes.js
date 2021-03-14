const { Router } = require('express');
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
router.put('/:id', userPut);
router.post('/', userPost);
router.delete('/', userDelete);
router.patch('/', userPatch);

module.exports = router;
