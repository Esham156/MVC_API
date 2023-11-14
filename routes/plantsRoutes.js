const express = require("express")
const router = express.Router()

const plantsController = require("../controller/plantsController")

//get
router.get("/", plantsController.index)

router.get("/:id", plantsController.show)

//post
router.post("/", plantsController.create)

//patch
router.patch("/:id", plantsController.update)

//delete
router.delete("/:id", plantsController.destroy)

module.exports = router