const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const SpecializationSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  definition: {
    type: String,
    required: true
  },
  courses: [
    {
      code: { type: String, required: true },
      name: { type: String, required: true }
    }
  ]
});

module.exports = Specialization = mongoose.model(
  "specialization",
  SpecializationSchema
);
