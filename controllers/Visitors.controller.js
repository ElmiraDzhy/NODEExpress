const fs = require("fs/promises");
const path = require("path");

module.exports.getVisitors = (req, res, next) => {
	const filePath = path.join(__dirname, "../files/visitors.txt");
	fs
		.readFile(filePath, "utf-8")
		.then((result) => result.split("\n").filter((mail) => mail !== ""))
		.then((data) => res.send(data));
};

