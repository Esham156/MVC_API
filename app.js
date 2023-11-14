const express = require("express")
const cors = require("cors")
const logger = require("morgan")

const plants = require("./data/plants")
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

app.get("/plants",(req,res)=>{
    res.send(plants)
})

app.get("/plants/:id",(req,res)=>{
    idx = req.params.id - 1
    res.send(plants[idx])
})
//post

//update


//delete

 //export
 module.exports = app