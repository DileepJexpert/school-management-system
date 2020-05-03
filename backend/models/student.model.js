var mongoose = require('mongoose'), Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({

  id: String,
  firstName: String,
  lastName: String,
  emailId: String,
  fatherName: String,
  motherName: String,
  address: String,
  dateOfBirth: String,
  created: { type: Date },
  updated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Student', PostSchema);