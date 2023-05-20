const express = require('express');
const router = express.Router();

const placesApiController = require('../controllers/placesAPI');

router.get('/', placesApiController.getPlaces); 
router.get('/:placeId', placesApiController.getPlaceById); 
router.post('/', placesApiController.createPlace); 
router.put('/:placeId', placesApiController.updatePlace); 
router.delete('/:placeId', placesApiController.deletePlace); 

module.exports = router;