const admin = { email: "super@gmail.com", password: "admin" };
// const yup = require("yup");
// const fs = require("fs/promises");
// const path = require("path");

// const schema = yup.string().email();

module.exports.validateUserAccess = async (req, res, next) => {
	const { body: userData } = req;

	for (const key in admin) {
		if (admin[key] !== userData[key]) {
			return res.status(400).send("You shall not pass");
		}
	}

	// try {
	// 	const userMail = await schema.validate(userData.email);
	// 	const filePath = path.join(__dirname, "../files/visitors.txt");
	// 	await fs.appendFile(filePath, userMail + "\n");
	// 	next();
	// } catch (err) {
	// 	console.log(err);
	// }

	next();
};

