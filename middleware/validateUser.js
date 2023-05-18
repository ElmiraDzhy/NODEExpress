module.exports.validateUserAccess = (req, res, next) => {
	const { body } = req;
	if (Math.random() > 0.5) {
		console.log(body);

		next();
	} else {
		res.status(400);
		res.end("you are not valid to access this information");
	}
};

