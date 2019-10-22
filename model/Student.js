const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coursesSchema = new Schema({
  code: { type: String, required: true },
  grade: { type: String, required: true }
});
// Create Schema
const studentSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    regNo: {
      type: String,
      required: true
    },
    courses: [coursesSchema]
  },
  { timestamps: true }
);

module.exports = Student = mongoose.model("students", studentSchema);
