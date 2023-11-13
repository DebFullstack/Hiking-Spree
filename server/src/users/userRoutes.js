const { Router } = require('express');
const controller = require('./userController');
//Router object
const router= Router();


//entire route /api/v1/users
router.get('/', controller.getUsers);

router.get('/:userId', controller.getUserById);

router.post('/', controller.createUser);

router.delete('/:userId', controller.deleteUserById);

module.exports = router;