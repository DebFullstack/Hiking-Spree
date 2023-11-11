const { Router } = require('express');
const controller = require('./userController');
//Router object
const router= Router();


//entire route /api/v1/users
router.get('/', controller.getUsers);

module.exports = router;