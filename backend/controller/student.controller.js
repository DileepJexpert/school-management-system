const Student = require('../models/student.model.js');

// Create and Save a new Student
exports.create = (req, res) => {
    
    console.log("in side seevice ------"+req.body.comment);
    // const student = new Student({
       
    //     title: req.body.title || "Untitled Note", 
    //     content: req.body.content
    //   });

    // Save Student in the database
    Student.create(req.body, function (err, student) {
        if (err) return next(err);
        res.json(student);
      });
   
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    console.log("in side seevice findall------"+req.body)
    Student.find()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
  
    let id = req.params.id;
    console.log("in side seevice one------"+req.body.id)
    Student.findById(req.params.id)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Student not found with id " + req.params.noteId
            });            
        }
        console.log("response from  -----------"+note);
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Student not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.noteId
        });
    });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Student content can not be empty"
        });
    }

    // Find note and update it with the request body
    Student.findByIdAndUpdate(req.params.noteId, {
        title: req.body.title || "Untitled Student",
        content: req.body.content
    }, {new: true})
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Student not found with id " + req.params.noteId
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Student not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.noteId
        });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Student.findByIdAndRemove(req.params.noteId)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Student not found with id " + req.params.noteId
            });
        }
        res.send({message: "Student deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Student not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.noteId
        });
    });
};
