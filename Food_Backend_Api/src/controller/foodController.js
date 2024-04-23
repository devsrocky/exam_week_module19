const foodModel = require('../model/foodsModel')

// CREATE FOOD || api
exports.createFood = async (req, res) => {
    try{

        let reqBody = req.body;
        await foodModel.create(reqBody)
        res.status(201).json({status: 'success'})

    }catch(err){
        res.status(401).json({status: 'food isn\'t published', data: err.message})
    }
}

// READ FOOD LIST
exports.foodList = async (req, res) => {
    try{
        const foods = await foodModel.find()
        res.status(200).json({status: 'Available now', Foods: foods})
    }catch(err){
        res.status(404).json({status: 'Failed to read Recipe', data: err.message})
    }
}

// READ-BY-ID 
exports.foodListById = async (req, res) => {
    try{
        let {id} = req.params;
        const foods = await foodModel.find({_id: id})
        res.status(200).json({status: 'success', Foods: foods})
    }catch(err){
        res.status(404).json({status: 'Failed to read Recipe', data: err.message})
    }
}



// UPDATE ALL FOODS || specifiq one by food's id
exports.updateFood = async (req, res) => {
    try{
        let {id} = req.params;
        let reqBody = req.body;
        await foodModel.updateOne({_id: id}, reqBody)
        res.status(201).json({status: 'suceess'})
    }catch(err){
        res.status(404).json({status: 'Recipe update failed', data: err.message})
    }
}



// DELETE FOOD || specifiq one by food's id
exports.deleteFood = async (req, res) => {
    try{
        let {id} = req.params;
        const data = await foodModel.deleteOne({_id:id})
        res.status(200).json({status: 'success', data: data})
    }catch(err){
        res.status(401).json({status: 'Recipe delete failed', data: err.message})
    }
}