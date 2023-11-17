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

    try {
        const { rows } = await pool.query(trailQueries.getTrailById, [trailId]);

        if (rows.length === 0) {
            return res.status(404).json({ error: "trail not found" });
        }

        res.status(200).json(rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
	getTrails,
	getTrailById,
}