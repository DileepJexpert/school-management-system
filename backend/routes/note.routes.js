const express = require("express");

const NoteController = require("../controller/note.controller");


const router = express.Router();

router.post('/notes', NoteController.create);



module.exports = router;