const express = require("express");

const StudentController = require("../controller/student.controller");



const router = express.Router();

router.post("" ,StudentController.create);

router.get("", StudentController.findAll);
router.get("/:id", StudentController.findOne);

module.exports = router;
