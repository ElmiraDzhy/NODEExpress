const express = require("express");
const app = express();
const bodyParser = express.json();
const { validateMedicine } = require("./middleware/validateMedicine");
const MedicineController = require("./controllers/Medicine.controller");

app.post("/medicine", bodyParser, validateMedicine, MedicineController.addMedicine);
app.get("/medicine/all",  MedicineController.getAllMed);
app.listen(3000);

