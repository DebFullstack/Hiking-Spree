const pool = require('../../db');
const userQueries = require('./userQueries')

const getUsers = async (req, res) => {
		pool.query(userQueries.getUsers, (error, results) => {
			if (error) throw error;
			res.status(200).json(results.rows);
		})
};

module.exports = {
	getUsers,
}