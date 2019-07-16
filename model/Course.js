const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CareerSchema = new Schema({
  course: {
    type: Array,
    required: true
  }
});

module.exports = Course = mongoose.model("course", CareerSchema);
