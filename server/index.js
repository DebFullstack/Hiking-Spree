const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv/config');
const apiUrl = process.env.API_URL
const userRoutes = require("./src/users/userRoutes");
const trailRoutes = require("./src/trails/trailRoutes");
const parkRoutes = require("./src/parks/parkRoutes");
const participantRoutes = require("./src/participants/participantRoutes");

//specify allowed origins
//app.use(cors());
// app.use(cors({
// 	origin: ['http://localhost:3000', 'http://127.0.0.1:5173']
//   }));
app.use(cors({
	origin: 'http://localhost:5173', // Allow requests from this origin
	credentials: true // Allow credentials (cookies, authorization headers, etc.)
  }));
  
app.use(express.json());


app.get("/", (req, res) => {
	res.send('Hello World!');
})

app.use('/api/v1/users', userRoutes);

app.use('/api/v1/trails', trailRoutes);

app.use('/api/v1/parks', parkRoutes);

app.use('/api/v1/participants', participantRoutes);


app.listen(3000, () => console.log("Server is running on port 3000"));
