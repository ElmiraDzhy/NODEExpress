const yup = require("yup");

const MEDICINE_SCHEMA = yup.object({
	name: yup.string("Name must be a string").required("Name is required"),
	price: yup.number("Price must be a number").required("Price is required"),
	quantity: yup.number("Quantity must be a number").required("Quantity is required"),
});

module.exports.validateMedicine = async (req, res, next) => {
	try {
		await MEDICINE_SCHEMA.validate(req.body);
		next();
	} catch (e) {
		res.status(400).send(e.message);
	}
};

