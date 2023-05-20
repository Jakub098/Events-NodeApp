const express = require('express');
const router = express.Router();

const eventTypeApiController = require('../controllers/eventTypesAPI');

router.get('/', eventTypeApiController.getEventTypes); 
router.get('/:eventTypeId', eventTypeApiController.getEventTypeById); 
router.post('/', eventTypeApiController.createEventType); 
router.put('/:eventTypeId', eventTypeApiController.updateEventType); 
router.delete('/:eventTypeId', eventTypeApiController.deleteEventType); 

module.exports = router;