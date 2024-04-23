const express = require('express')
const router = express.Router()

// IMPORT CONTROLLERS
const foodController = require('../controller/foodController')


// ROUTING PATH SPECIFIED
router.post('/createFood', foodController.createFood)
router.get('/foodList', foodController.foodList)
router.get('/foodListById/:id', foodController.foodListById)
router.post('/updateFood/:id', foodController.updateFood)
router.get('/deleteFood/:id', foodController.deleteFood)


// EXPORT ROUTER
module.exports = router;