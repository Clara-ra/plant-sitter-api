const express = require('express')
const router = express.Router()
const plantsController = require('../controllers/plant')

router.get('/', plantsController.getPlants) 
router.get('/:id', plantsController.getOnePlant)
router.post('/addPlant', plantsController.addPlant)
router.put('/editPlant/:id', plantsController.editPlant)

module.exports = router