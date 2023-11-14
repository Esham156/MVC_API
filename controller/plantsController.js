const Plants = require("../models/Plants")

const index = async (req,res)=>{
    const plants = await Plants.getAll()
    res.send(plants)
}

const show = async (req,res)=>{
    try{
    idx = parseInt(req.params.id)
    const plant = await Plants.findById(idx)
    res.send(plant)
    }catch(err){
        res.status(404).send({error: err.message})
    }
}

const create = async (req, res)=>{
    const 
}

module.exports = {index, show, create}