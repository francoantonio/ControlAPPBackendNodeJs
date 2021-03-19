const jwt = require('jsonwebtoken');

const generarJWT = (uid = '') => {
	return new Promise((resolve, reject) => {
		const pytload = { uid };

		jwt.sign(
			pytload,
			process.env.SECRETORPRIVATEKEY,
			{
				expiresIn: '24h',
			},
			(err, token) => {
				if (err) {
					console.log(err);
					reject('Error al genera el token');
				} else {
					resolve(token);
				}
			}
		);
	});
};

module.exports = {
	generarJWT,
};
