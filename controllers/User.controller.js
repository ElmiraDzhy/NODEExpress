const fs = require("fs/promises");
const path = require("path");

module.exports.getUsersSecurePage = (req, res) => {
	const filePath = path.join(__dirname, "../views/secure-page.html");
	fs.readFile(filePath).then((result) => res.send(result));
};

