const pool = require('../../db');
const userQueries = require('./userQueries');

const getUsers = async (req, res) => {
		pool.query(userQueries.getUsers, (error, results) => {
			if (error) throw error;
			res.status(200).json(results.rows);
		})
};

const getUserById = async (req, res) => {
    const userId = req.params.userId;

    try {
        const { rows } = await pool.query(userQueries.getUserById, [userId]);

        if (rows.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json(rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const createUser = async (req, res) => {
	const {
	  username,
	  email,
	  password_hash,
	  first_name,
	  last_name,
	  profile_pic,
	  unique_parks_visited,
	} = req.body;
  
	const values = [
	  username,
	  email,
	  password_hash,
	  first_name,
	  last_name,
	  profile_pic,
	  unique_parks_visited,
	];
  
	pool.query(userQueries.createUser, values, (error, results) => {
	  if (error) {
		console.error(error);
		return res.status(500).json({ error: 'Internal Server Error' });
	  }
  
	  res.status(201).json(results.rows[0]);
	});
  };
  
  const deleteUserById = async (req, res) => {
	const userId = req.params.userId;
  
	pool.query(userQueries.deleteUserById, [userId], (error, results) => {
	  if (error) {
		console.error(error);
		return res.status(500).json({ error: 'Internal Server Error' });
	  }
  
	  if (results.rows.length === 0) {
		return res.status(404).json({ error: 'User not found' });
	  }
  
	  res.status(200).json({ message: 'User deleted successfully' });
	});
  };

  module.exports = {
	getUsers,
	getUserById,
	createUser,
	deleteUserById
  };