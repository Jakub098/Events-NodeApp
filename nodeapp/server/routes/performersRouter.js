const express = require('express');
const router = express.Router();

const performersApiController = require('../controllers/performersAPI');

router.get('/', performersApiController.getPerformers); 
router.get('/:performerId', performersApiController.getPerformerById); 
router.post('/', performersApiController.createPerformer); 
router.put('/:performerId', performersApiController.updatePerformer); 
router.delete('/:performerId', performersApiController.deletePerformer); 

module.exports = router;