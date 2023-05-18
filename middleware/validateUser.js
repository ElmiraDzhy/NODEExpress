module.exports.validateUserAccess = (req, res, next) => {
	if (Math.random() > 0.5) {
		next();
	} else {
		res.status(400);
		res.end("you are not valid to access this information");
	}
};

