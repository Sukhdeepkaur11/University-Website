const { UserModel, MessageModel, CommentModel } = require("./model.js");
const bcrypt = require("bcryptjs");
//const jwt = require("jsonwebtoken");
const storeUser = async (userData) => {
  try {
    const password = await bcrypt.hashSync(userData.password, 10);
    userData = {
      ...userData,
      password,
    };
    const user = new UserModel(userData);
    await user.save();
    console.log("user created");
  } catch (err) {
    throw "failed to create user";
  }
};
const getUser = async (email) => {
  try {
    const user = UserModel.findOne({
      email: email,
    });
    return user;
  } catch (error) {
    throw "unable to find user";
  }
};

const login = async (userData) => {
  try {
    const user = await UserModel.findOne({
      email: userData.email,
    });
    if (!user) {
      throw "invalid login";
    }
    const matches = await bcrypt.compare(userData.password, user.password);
    if (!matches) {
      throw {
        code: 404,
        message: "Invalid password",
      };
    }
    // const token = await jwt.sign({ userId: user.id }, "SECRET_KEY", {
    //   expiresIn: "2h"},
    // );
    return user;
    //token,;
  } catch (error) {
    throw {
      code: 404,
      message: "Couldn't find user",
    };
  }
};

//message handling from contact.html

const storeMessage = async (messageData) => {
  try {
    const message = new MessageModel(messageData);
    await message.save();
    console.log("Message Received");
    //res.send("Message saved to database");
    //window.location = "/contact.html";
  } catch (err) {
    console.log(err);
    throw "failed to save message";
  }
};

//comment handling from blog.html

const storeComment = async (commentData) => {
  try {
    const comment = new CommentModel(commentData);
    await comment.save();
    console.log("Comment Received");
    //res.send("Comment saved to database");
    //window.location = "/blog.html";
  } catch (err) {
    throw "failed to save Comment";
  }
};
module.exports = {
  storeUser,
  storeMessage,
  storeComment,
  getUser,
  login,
};
