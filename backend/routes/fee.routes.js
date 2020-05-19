const express = require("express");

const FeeController = require("../controller/fee.controller");



const router = express.Router();

router.post("" ,FeeController.create);


router.get("", FeeController.findAll);
module.exports = router;
