const db = require('../../db'); 
const parkQueries = require('./parkQueries');

const getParks = async (req, res) => {
  try {
    const parks = await db.any(parkQueries.getParks);
    res.status(200).json(parks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getParkById = async (req, res) => {
  const parkId = req.params.parkId;

  try {
    const park = await db.oneOrNone(parkQueries.getParkById, [parkId]);

    if (!park) {
      return res.status(404).json({ error: 'Park not found' });
    }

    res.status(200).json(park);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
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

  try {
    const park = await db.one(parkQueries.createPark, values);
    res.status(201).json(park);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getParks,
  getParkById,
  createPark,
};
