const plants = require("../data/plants")

const index = (req,res)=>{
    res.send(plants)
}

module.exports = {index}