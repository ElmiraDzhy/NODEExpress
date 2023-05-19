const map = new Map();

class MedicineDB {
	/**
	 *
	 * @param {Medicine} med
	 */
	static async addNewMedicine(med) {
		map.set(med.name, med);
		return med;
	}

	static async getAllMedicine() {
		return [...map.values()];
	}

	static async deleteMedicine(name) {
		map.delete(name);
	}

	static async getOneMedicine(name) {
		return map.get(name);
	}

	static async updateMedicine(med, quantity) {
		med.quantity = quantity;
		map.set(med.name, med);
		return med;
	}
}

class Medicine {
	constructor(name, price, quantity) {
		this.name = name;
		this.price = price;
		this.quantity = quantity;
	}

	get name() {
		return this._name;
	}
	get price() {
		return this._price;
	}
	get quantity() {
		return this._quantity;
	}

	set name(v) {
		this._name = v;
	}

	set price(v) {
		if (typeof v !== "number") {
			throw new TypeError("price must be a number");
		}
		this._price = v;
	}
	set quantity(v) {
		if (typeof v !== "number") {
			throw new TypeError("must be a number");
		}
		this._quantity = v;
	}
}

module.exports = {
	Medicine,
	MedicineDB,
};

