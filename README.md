const router = express.Router();

//

// Route to add a new user
router.post('/users', async (req, res) => {
	try {
	  const { username, email, password } = req.body;
  
	  // Assuming you have a 'users' table with columns 'username', 'email', and 'password'
	  const query = 'INSERT INTO user (username, email, password_hash, first_name, last_name, profile_pic, unique_parks_visited) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
  
	  // Execute the query with user-supplied values
	  const result = await pool.query(query, [username, email, password_hash, first_name, last_name, profile_pic, unique_parks_visited]);
  
	  // Return the newly created user
	  res.status(201).json(result.rows[0]);
	} catch (error) {
	  console.error('Error adding user:', error);
	  res.status(500).send('Internal Server Error');
	}
  });

// app.post("/users", async (req, res) => {
// 	try {
// 		const addUser = await pool.query("INSERT")
// 	}
// })

app.get('/users', async (req, res) => {
	try {
		const allUsers = await pool.query("SELECT * FROM 'user'");
		res.json(allUsers.rows);
	} catch (err) {
		console.error(err.message);
	}
})
