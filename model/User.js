const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  regNo: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  admin: {
    type: Boolean,
    default: false
  }
}, {timestamps: true});

module.exports = User = mongoose.model("users", UserSchema);
