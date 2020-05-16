var mongoose = require('mongoose'), Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({

  id: String,
  adharNumber:String,
  studentName: String,
  fatherName: String,
  motherName: String,
  fatherOccupation: String,
  motherOccupation: String,
  address: String,
  dateOfBirth: Date,
  gender:String,
  socialCategory:String,
  religion:String,
  motherTounge: String,
  admissionDate: Date,
  admissionGrade: String,
  previousSchool: String,
  previousClass: String,
  isPreviousTC: Boolean,
  isDisabled:Boolean,
  created: { type: Date },
  updated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Student', PostSchema);