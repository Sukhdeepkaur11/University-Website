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
  isTeacher: Boolean,
});
const UserModel = new mongoose.model("users", UserSchema);

//Schema for messages

const MessageSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: true,
    //unique: true,
  },
  subject: String,
  message: String,
});
const MessageModel = new mongoose.model("messages", MessageSchema);

//Schema for comments in Blog.html

const CommentSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: true,
    //unique: true,
  },
  comment: String,
});
const CommentModel = new mongoose.model("comments", CommentSchema);

module.exports = {
  UserModel,
  MessageModel,
  CommentModel,
};
