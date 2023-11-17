const pool = require('../../db');
const trailQueries = require('./trailQueries');

const getTrails = async (req, res) => {
	pool.query(trailQueries.getTrails, (error, results) => {
		if (error) throw error;
		res.status(200).json(results.rows);
	})
};

const getTrailById = async (req, res) => {
	const trailId = req.params.trailId;

	pool.query(trailQueries.getTrailById, [trailId], (error, results) => {
		if(error) {
			console.error(error);
			return res.status(500).json({ error:'Internal Server Error' });
		}

		if (results.rows.length === 0) {
			return res.status(404).json({ error: "Trail not found" });
		}
		res.status(200).json(results.rows[0]);
	});
};

module.exports = {
	getTrails,
	getTrailById,
}