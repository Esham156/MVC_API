const Plants = require("../models/Plants")

const index = async (req,res)=>{
    const plants = await Plants.getAll()
    res.send(plants)
}

module.exports = {index}