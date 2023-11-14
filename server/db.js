const Pool = require('pg').Pool;

const pool = new Pool ({
	user: "postgres",
	password: "H@mmi3",
	host: "localhost",
	port: 5432,
	database: "hiking_spree",
});

module.exports = {
	pool,
	query: (text, params) => pool.query(text, params),
  	none: (text, params) => pool.query(text, params).then(() => undefined),
}