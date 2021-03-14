const mongoose = require('mongoose');

const dbConnection = async () => {
	try {
		await mongoose.connect(process.env.MongoDB_CNN, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		});

		console.log('Base de dato Online');
	} catch (error) {
		console.log(error);
		throw new Error('Error en la hora de iniciar la base de datos');
	}
};

module.exports = {
	dbConnection,
};
