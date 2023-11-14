const express = require("express")
const router = express.Router()

const plantsController = require("../controller/plantsController")

router.get("/",plantsController.index)

router.get("/:id",plantsController.show)

module.exports = router