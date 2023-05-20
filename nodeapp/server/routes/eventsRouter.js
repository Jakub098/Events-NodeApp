const express = require('express');
const router = express.Router();

const eventsApiController = require('../controllers/eventsAPI');

router.get('/', eventsApiController.getEvents); 
router.get('/:eventId', eventsApiController.getEventById); 
router.post('/', eventsApiController.createEvent); 
router.put('/:eventId', eventsApiController.updateEvent); 
router.delete('/:evenId', eventsApiController.deleteEvent); 

module.exports = router;