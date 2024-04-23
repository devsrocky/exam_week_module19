const mongoose = require('mongoose')

// CREATE MONGOOSE SCHEMA || required fields
const foodSchema = mongoose.Schema({

    foodName: {type: String},
    foodCode: {type: String},
    foodImage: {type: String},
    foodCategory: {type: String},
    QTY: {type: String},
    price: {type: String}

}, {timestamps: true, versionKey: false})


// CONVERT MONGOOSE SCHEMA INTO MODEL || create mongoose model
const foodModel = mongoose.model('foods', foodSchema)


// EXPORT FOOD-MODEL
module.exports = foodModel;