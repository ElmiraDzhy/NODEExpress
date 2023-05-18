const express = require("express");
const { handler, handler2, handler3 } = require("./controllers/User.controller");
const app = express();

app.get("/index", validateUserAccess, handler);
app.get("/product", validateUserAccess, handler2);
app.get("/users", validateUserAccess, handler3);

app.post("/users", userHandler);

function userHandler(req, res, next) {
	res.status(400).end("user cannot be created");
}

app.listen(3002);

