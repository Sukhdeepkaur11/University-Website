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
  pass1: String,
  pass2: String,
});
console.log("in model");
const userModel = new mongoose.model("Users", UserSchema);

//Schema for messages

const MessageSchema = new Schema({
  name1: String,
  email1: {
    type: String,
    required: true,
    //unique: true,
  },
  subject: String,
  message: String,
});
const MessageModel = new mongoose.model("Messages", MessageSchema);

//Schema for comments in Blog.html

const CommentSchema = new Schema({
  name2: String,
  email2: {
    type: String,
    required: true,
    //unique: true,
  },
  Comment: String,
});
const CommentModel = new mongoose.model("Comments", CommentSchema);

module.exports = {
  userModel,
  MessageModel,
  CommentModel,
};
