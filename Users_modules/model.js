//const { Schema } = require("mongoose");

//const { mongoose, Schema } = require("../db/db");
const { getConnection, Schema, mongoose } = require("../db/db");
const mongoose = getConnection();
const UserSchema = new Schema({
  name: String,
  empId: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  rpassword: String,
});

const userModel = new mongoose.model("users", UserSchema);

module.exports = UserModel;
