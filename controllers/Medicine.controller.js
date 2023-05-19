const { Medicine, MedicineDB } = require("../models/Medicine");

module.exports.addMedicine = async (req, res) => {
	// req.body has all info we need -> {name, price, quantity}
	const { name, price, quantity } = req.body;
	try {
		const med = new Medicine(name, price, quantity);
		const newMed = await MedicineDB.addNewMedicine(med);
		res.status(201).send(newMed);
	} catch (e) {
		console.log(e);
	}
};

module.exports.getAllMed = async (req, res) => {
	try {
		const allMed = await MedicineDB.getAllMedicine();
		res.status(200).send(allMed);
	} catch (e) {
		console.log(e);
	}
};

module.exports.getOneMed = async (req, res) => {
	try {
		const { name } = req.params;
		const med = await MedicineDB.getOneMedicine(name);
		res.status(200).send(med);
	} catch (e) {
		console.log(e);
	}
};

