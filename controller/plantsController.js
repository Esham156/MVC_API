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

const create = async (req, res) => {
    try {
      console.log(req.body)
      if (!req.body.name || !req.body.genus) {
        throw new Error('You need the name and the genus of the plant')
      }
      const newPlant = await Plants.create(req.body)
      res.status(201).send(newPlant)
    } catch (err) {
      res.status(422).send({ error: err.message })
    }
  
}

const update = async (req, res) => {
    try {
      const id  = req.params.id
      const plantToUpdate = await Plants.findById(parseInt(id))
  
      const updatedPlant = await plantToUpdate.update(req.body)
      res.status(200).send({ data: updatedPlant })
    } catch (err) {
      res.status(400).send({ error: err.message })
    }
  }
module.exports = {index, show, create, update}