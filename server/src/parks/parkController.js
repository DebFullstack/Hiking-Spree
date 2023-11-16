const pool = require('../../db'); 
const parkQueries = require('./parkQueries');

const getParks = async (req, res) => {
  pool.query(parkQueries.getParks, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  })
};

const getParkById = async (req, res) => {
  const parkId = req.params.parkId;

  pool.query(parkQueries.getParkById, [parkId], (error, results) => {
		if(error) {
			console.error(error);
			return res.status(500).json({ error:'Internal Server Error' });
		}

		if (results.rows.length === 0) {
			return res.status(404).json({ error: "Park not found" });
		}
		res.status(200).json(results.rows[0]);
	});
};

const createPark = async (req, res) => {
  const {
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
    zipcode_2,
  } = req.body;

  const values = [
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
    zipcode_2,
  ];
  pool.query(parkQueries.createPark, values, (error, results) => {
	  if (error) {
		console.error(error);
		return res.status(500).json({ error: 'Internal Server Error' });
	  }  
    res.status(201).json(results.rows[0]);

	});
  };

  const deleteParkById = async (req, res) => {
    const parkId = req.params.parkId;
    
    pool.query(parkQueries.deleteParkById, [parkId], (error, results) => {
      if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
      }
    
      if (results.rows.length === 0) {
      return res.status(404).json({ error: 'Park not found' });
      }
    
      res.status(200).json({ message: 'Park deleted successfully' });
    });
    };

    
module.exports = {
  getParks,
  getParkById,
  createPark,
  deleteParkById
};
