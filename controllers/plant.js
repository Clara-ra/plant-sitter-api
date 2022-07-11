const Plant = require('../models/PlantModel')

module.exports = {
    //get a list of all plants in the db
    getPlants: async (req,res)=>{
        console.log(`requested list of plants.`)
        try{
            const plantItems = await Plant.find()
            res.json(plantItems)
        }catch(err){
            console.log(err)
        }
        console.log('List of plants successfully sent.')
    },

    //gets one plant from the db using the plant id
    getOnePlant: async (req,res)=>{
        console.log(`requested plant ${req.params.id}`)
        try{
            const plantItem = await Plant.findOne( { _id: req.params.id } )
            res.json(plantItem)
        }catch(err){
            console.log(err)
        }
        console.log('plant successfully sent.')
    },


    //add one plant to the db
    addPlant: async (req,res)=>{
        console.log("add plant request received")
        try{
            const addedPlant = await Plant.create({
                plantName: req.body.plantName,
                location: req.body.location,
                issue: ''
            })
            res.json(addedPlant)
            console.log("Plant successfully added.")
        }catch(err){
            console.log(err)
            res.sendStatus(403)
        }
    },

    //edit the name and/or location of a plant in the db
    editPlant: async (req, res)=>{
        console.log(`edit request received for ${req.params.id}`)
        try{
            const editedPlant = await Plant.updateOne(
                { _id: req.params.id },
                { 
                    plantName: req.body.plantName,
                    location: req.body.location
                }
            )
            console.log("Plant successfully edited.")
            res.json(editedPlant)
        }catch(err){
            console.log(err)
        }
    }
}