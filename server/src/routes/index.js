const formRouter = require('./form');
const infoRouter = require('./info');

module.exports = (app) => {
	app.use('/form', formRouter);
	app.use('/info', infoRouter);
	app.use('/', (req, res, next) => {
		res.json({ Message: 'Hello world!' });
	});
};
