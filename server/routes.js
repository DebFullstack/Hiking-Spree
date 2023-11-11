const express = require('express');
const router = express.Router();
const pool = require('./db');
const apiUrl = process.env.API_URL;

router.get('/users', async (req, res) => {
	try{
		const { rows } = await pool.query('SELECT * FROM user');
		res.json(rows);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' })
	}
});

module.exports = router;