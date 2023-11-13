const getParks = 'SELECT * FROM parks';

const getParkById = 'SELECT * FROM park WHERE park_id = $1';

// Insert a new park query
const createPark = `
  INSERT INTO park (
    park_name,
    park_website,
    county,
    hiking_spree_challenge,
    street_number,
    street_name,
    city,
    state,
    zipcode,
    street_number_2,
    street_name_2,
    city_2,
    state_2,
    zipcode_2
  ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *;
`;

module.exports = {
  getParks,
  getParkById,
  createPark,
};