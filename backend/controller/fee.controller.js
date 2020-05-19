const Fee = require('../models/fee.model.js');

// Create and Save a new Student
exports.create = (req, res) => {
    
    console.log("in side seevice ------"+req.body.comment);
    
    // Save Student in the database
    Fee.create(req.body, function (err, fee) {
        if (err) return next(err);
        res.json(fee);
      });
   
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    console.log("in side fee service findall------"+req.body)
    Fee.find()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

