const { Router } = require('express');
const router= Router();
const parkController = require('./parkController');

// Route to get all parks
router.get('/', parkController.getParks);

// Route to get a single park by park_id
router.get('/:parkId', parkController.getParkById);

// Route to create a new park
router.post('/', parkController.createPark);

//route to delete park by id
router.delete('/:parkId', parkController.deleteParkById);

module.exports = router;
