const express = require("express");

const { getUsersSecurePage } = require("./controllers/User.controller");
const { validateUserAccess } = require("./middleware/validateUser");
const { getVisitors } = require("./controllers/Visitors.controller");

const app = express();
const bodyParser = express.json(); //return function middleware

app.post("/secure-page", bodyParser, validateUserAccess, getUsersSecurePage);
app.get("/visitors", getVisitors);
app.listen(3002);

