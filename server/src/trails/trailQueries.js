const getTrails = 'SELECT * FROM trail';

const getTrailById = 'SELECT * FROM trail WHERE trail_id = $1';

module.exports = {
	getTrails,
	getTrailById
}