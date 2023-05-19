const express = require("express");
const app = express();
const bodyParser = express.json();
const MedicineController = require("./controllers/Medicine.controller");

app.post("/medicine", bodyParser, MedicineController.addMedicine);

app.listen(3000);

