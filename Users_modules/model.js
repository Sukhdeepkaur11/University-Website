const { mongoose, Schema } = require("../db/db");

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

const UserModel = new mongoose.model("todo-users", UserSchema);

module.exports = UserModel;
