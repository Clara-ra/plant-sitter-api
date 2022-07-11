const mongoose = require('mongoose')

const PlantStatusSchema = new mongoose.Schema({
    //plantid is different from plantStatusid...
    plant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Plant"
    },
    timestamp: {
        type: String,
        required: true,
    },
    temperature: {
        type: Number,
        required: true,
    },
    humidity: {
        type: Number,
        required: true,
    },
    light: {
        type: Number,
        required: true,
    },
    moisture: {
        type: Number,
        required: true,
    },
})

module.exports = mongoose.model('PlantStatus', PlantStatusSchema)