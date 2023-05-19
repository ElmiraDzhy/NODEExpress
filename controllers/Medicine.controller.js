const { Medicine, MedicineDB } = require("../models/Medicine");

module.exports.addMedicine = async (req, res) => {
	// req.body has all info we need -> {name, price, quantity}
	const { name, price, quantity } = req.body;
	const med = new Medicine(name, price, quantity);
	try {
		await MedicineDB.addNewMedicine(name, med);
	} catch (e) {
		console.log(e);
	}
};

