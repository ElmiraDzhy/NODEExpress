const express = require("express");
const app = express();
const bodyParser = express.json();
const { validateMedicine, validateUpdMed } = require("./middleware/validateMedicine");
const MedicineController = require("./controllers/Medicine.controller");

//POST
app.post("/medicine", bodyParser, validateMedicine, MedicineController.addMedicine);

//GET
app.get("/medicine", MedicineController.getAllMed);
app.get("/medicine/:name", MedicineController.getOneMed);

//PATCH
app.patch("/medicine", bodyParser, MedicineController.updateMed);

//DELETE
app.delete("/medicine/:name", MedicineController.deleteMed);

app.listen(3000);

