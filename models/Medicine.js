const map = new Map();

class MedicineDB {
	constructor() {
		this.db = map;
	}

	/**
	 *
	 * @param {Medicine} med
	 */
	static addNewMedicine(med) {
		this.db.set(med.name, med);
	}

	static getAllMedicine() {
		return [...this.db.values()];
	}

	static deleteMedicine(name) {
		this.db.delete(name);
	}

	static getOneMedicine(name) {
		return this.db.get(name);
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

