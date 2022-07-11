const express = require('express')
const router = express.Router()
const plantStatusController = require('../controllers/plantStatus')

router.get('/:id', plantStatusController.getPlantStatus)

router.post('/addData/:id', plantStatusController.addData)

// router.put('/markComplete', plantStatusController.markComplete)

// router.put('/markIncomplete', plantStatusController.markIncomplete)

// router.delete('/deleteTodo', plantStatusController.deleteTodo)

module.exports = router