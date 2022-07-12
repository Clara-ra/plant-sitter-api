const PlantStatus = require('../models/PlantStatusModel')

module.exports = {
    //get a list of all status updates for one plant via its plantID
    getPlantStatus: async (req,res)=>{
        console.log(`requested plant data for ${req.params.id}`)
        try{
            const plantData = await PlantStatus.find({ plant: req.params.id })
            res.json(plantData)
        }catch(err){
            console.log(err)
        }
        console.log('plant data successfully retrieved!')
    },
    //add datapoint for one plant via its plantID
    addData: async (req, res)=>{
        console.log(`adding data point for ${req.params.id}...`)
        try{
            const dataPoint = await PlantStatus.create({
                plant: req.params.id,
                timestamp: req.body.timestamp,
                temperature: req.body.temperature, 
                humidity: req.body.humidity, 
                light: req.body.light, 
                moisture: req.body.moisture, 
            })
            console.log('Plant data added!')
            res.json(dataPoint)
        }catch(err){
            console.log(err)
            res.sendStatus(400)
        }
    },


    // markComplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: true
    //         })
    //         console.log('Marked Complete')
    //         res.json('Marked Complete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // markIncomplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: false
    //         })
    //         console.log('Marked Incomplete')
    //         res.json('Marked Incomplete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // deleteTodo: async (req, res)=>{
    //     console.log(req.body.todoIdFromJSFile)
    //     try{
    //         await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
    //         console.log('Deleted Todo')
    //         res.json('Deleted It')
    //     }catch(err){
    //         console.log(err)
    //     }
    // }
}    