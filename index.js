const express = require( "express" );
const { handler, handler2, handler3 } = require("./controllers/User.controller");
const { validateUserAccess } = require("./middleware/validateUser");

const app = express();
const bodyParser = express.json(); //return function middleware


app.post("/index", bodyParser, validateUserAccess, handler);
app.post("/product", bodyParser, validateUserAccess, handler2);
app.post("/users", bodyParser, validateUserAccess, handler3);

app.listen(3002);

