const express = require("express")
const router = express.Router()

const plantsController = require("../controller/plantsController")

router.get("/",plantsController.index)

router.get("/plants/:id",(req,res)=>{
    idx = req.params.id - 1
    res.send(plants[idx])
})

module.exports = router