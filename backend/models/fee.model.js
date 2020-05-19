var mongoose = require('mongoose'), Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
  class: String,
  tutionFee: Number ,
  conveyanceFee: Number ,
  examinationFee: Number ,
  misclenousFee: Number ,
  educationalYear: String,
  comment: String,
  active: Boolean,
  created: { type: Date },
  updated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Fee', PostSchema);