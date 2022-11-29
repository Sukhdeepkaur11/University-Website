//const { Schema } = require("mongoose");

//const { mongoose, Schema } = require("../db/db");
const { getConnection, Schema, mongoose } = require("../db/db.js");
getConnection();
const UserSchema = new Schema({
  name: String,
  empId: String,
  email: {
    type: String,
    required: true,
    //unique: true,
  },
  password: String,
});
console.log("in model");
const userModel = new mongoose.model("Users", UserSchema);

module.exports = userModel;
