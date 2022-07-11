require('dotenv').config({ path: './config/.env'})
const express = require('express')
const app = express()
const cors = require('cors')
const connectDB = require('./config/database')
const homeRoutes = require('./routes/Plants')
const statusRoutes = require('./routes/PlantStatus')
const port = process.env.PORT || 8000

app.use(cors())
app.use(express.json())

connectDB()
 
//Setup routes for which the server is listening
app.use("/", homeRoutes)
app.use("/plant", statusRoutes)

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${port}, you better catch it!`)
})    