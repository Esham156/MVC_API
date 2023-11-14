const express = require("express")
const cors = require("cors")
const logger = require("morgan")

const plantsRoutes = require("./routes/plantsRoutes")
//start app
const app = express()

//middlewere
app.use(express.json())
app.use(cors())
app.use(logger('dev'))

//endpoints

//get
app.get("/",(req,res)=>{
    res.send({message: "welcome to the plants encyclopedia"})
})

app.use("/plants",plantsRoutes)

app.get("/plants/:id",plantsRoutes)
//post

//update


//delete

 //export
 module.exports = app