const { Router } = require('express');
const controller = require('./trailController');
//Router object
const router= Router();

router.get("/", controller.getTrails);

router.get("/:trailId", controller.getTrailById);

module.exports = router;