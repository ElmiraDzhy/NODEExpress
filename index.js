const express = require("express");
const app = express();
const bodyParser = express.json();
const { validateMedicine } = require("./middleware/validateMedicine");
const MedicineController = require("./controllers/Medicine.controller");

app.post("/medicine", bodyParser, validateMedicine, MedicineController.addMedicine);
app.get("/medicine", MedicineController.getAllMed);
app.get("/medicine/:name", MedicineController.getOneMed);

app.listen(3000);

