const express = require("express");
const pool = require('./db');
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.listen(5000, () => {
	console.log("Server is running on port 5000")
});
