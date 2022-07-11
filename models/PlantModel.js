const mongoose = require('mongoose')

const PlantSchema = new mongoose.Schema({
    plantName: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    issue: {
        type: String,
        required: false,
    }
})

module.exports = mongoose.model('Plant', PlantSchema)