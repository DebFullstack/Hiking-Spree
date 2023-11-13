const { Router } = require('express');
const controller = require('./trailController');
//Router object
const router= Router();

router.get("/", controller.getTrails);

module.exports = router;