const { Router } = require('express');
const controller = require('./participantController');
//Router object
const router= Router();

//entire route /api/v1/participants
router.get('/', controller.getParticipants);

router.get('/:participantId', controller.getParticipantById);

router.post('/', controller.createParticipant);

router.delete('/:particiantId', controller.deleteParticipantById);

module.exports = router;