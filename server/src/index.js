const express = require("express");
const pool = require('../db');
const app = express();
const cors = require("cors");
require('dotenv/config');
const apiUrl = process.env.API_URL
const userRoutes = require("./users/userRoutes");
const trailRoutes = require("./trails/trailRoutes");
const parkRoutes = require("./parks/parkRoutes")


app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
	res.send('Hello World!');
})

app.use('/api/v1/users', userRoutes);

app.use('/api/v1/trails', trailRoutes);

app.use('/api/v1/parks', parkRoutes);


app.listen(5000, () => console.log("Server is running on port 5000"));
