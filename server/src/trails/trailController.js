const pool = require('../../db');
const userQueries = require('./trailQueries');

const getTrails = async (req, res) => {
	pool.query(userQueries.getTrails, (error, results) => {
		if (error) throw error;
		res.status(200).json(results.rows);
	})
};

module.exports = {
	getTrails,
}