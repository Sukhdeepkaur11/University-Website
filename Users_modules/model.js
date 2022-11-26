const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
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

const UserModel = new mongoose.model("users", UserSchema);

module.exports = UserModel;
