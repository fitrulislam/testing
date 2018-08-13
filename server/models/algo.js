const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const algoSchema = new Schema({
  name: String,
  property: Object
});

const Algorithm = mongoose.model('Algorithm', algoSchema);

module.exports = Algorithm;