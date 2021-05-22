const info = {};

info.get = (req, res, next) => {
	res.json({ message: 'user data' });
};

module.exports = info;
