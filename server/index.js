const express = require("express");
const pool = require('./db');
const app = express();
const cors = require("cors");
require('dotenv/config');
const apiUrl = process.env.API_U
const routes = require("./routes");

app.use(cors());
app.use(express.json());

app.use('apiUrl/users', routes);

app.listen(5000, () => {
	console.log("Server is running on port 5000")
});