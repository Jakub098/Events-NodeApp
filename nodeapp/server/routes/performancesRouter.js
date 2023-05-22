const express = require('express');
const router = express.Router();

const performancesApiController = require('../controllers/performancesAPI');

router.get('/', performancesApiController.getPerformances); 
router.get('/:performanceId', performancesApiController.getPerformanceById); 
router.post('/', performancesApiController.createPerformance); 
router.put('/:performanceId', performancesApiController.updatePerformance); 
router.delete('/:performanceId', performancesApiController.deletePerformance); 

module.exports = router;