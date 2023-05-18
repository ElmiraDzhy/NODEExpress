module.exports.handler = (req, res) => {
	res.end("index");
};

module.exports.handler2 = (req, res) => {
	res.end("products");
};

module.exports.handler3 = (req, res) => {
	const users = [
		{
			firstName: "John",
			lastName: "Doe",
		},
		{
			firstName: "Jake",
			lastName: "Smith",
		},
		{
			firstName: "Kate",
			lastName: "Willson",
		},
	];
	res.send(users);
};

