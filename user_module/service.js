const { UserModel } = require("./model.js");
//const bcrypt = require("bcryptjs");
console.log("in service");
const storeUser = async (userData) => {
  try {
    const user = new UserModel(userData);
    await user.save();
    console.log("user created");
    res.send("item saved to database");
    window.location = "/login.html";
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
    if (userData.password != user.password) {
      throw "Invalid login info";
    }
    return user.id;
  } catch (error) {
    console.error(error);
    console.log("error happened");
    throw error;
  }
};

//message handling from contact.html
const MessageModel = require("./model.js");
//const bcrypt = require("bcryptjs");
console.log("in service/contact form");
const storeMessage = async (messageData) => {
  try {
    const message = new MessageModel(messageData);
    await message.save();
    console.log("Message Received");
    res.send("Message saved to database");
    window.location = "/contact.html";
  } catch (err) {
    throw "failed to save message";
  }
};

//comment handling from blog.html
const CommentModel = require("./model.js");
//const bcrypt = require("bcryptjs");
console.log("in service/blog form");
const storeComment = async (commentData) => {
  try {
    const comment = new CommentModel(commentData);
    await comment.save();
    console.log("Comment Received");
    res.send("Comment saved to database");
    window.location = "/blog.html";
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
// const create = async (user) => {
//   try {
//     // encrypt user password and store it.
//     const password = await bcrypt.hashSync(user.password, 10);
//     const userData = {
//       email: user.email,
//       password: password,
//     };
//     return await UserModel.create(userData);
//   } catch (error) {
//     console.log(error);
//     throw {
//       code: 401,
//       message: "Invalid User",
//     };
//   }
// };

// const getOne = async (email) => {
//   try {
//     const user = await UserModel.findOne({
//       email: email,
//     });

//     if (!user) {
//       throw "";
//     }

//     return user;
//   } catch (error) {
//     throw {
//       code: 401,
//       message: "couldnt find user",
//     };
//   }
// };

// const getOneById = async (id) => {
//   try {
//     const user = await UserModel.findOne({
//       _id: id,
//     });

//     if (!user) {
//       throw "";
//     }

//     return user;
//   } catch (error) {
//     throw {
//       code: 401,
//       message: "couldnt find user",
//     };
//   }
// };

// const getAll = async () => {
//   try {
//     const users = await UserModel.find({}).lean();

//     if (!users || users.length === 0) {
//       throw "";
//     }

//     return users;
//   } catch (error) {
//     throw {
//       code: 401,
//       message: "couldnt find any users",
//     };
//   }
// };

// const login = async (userDetails) => {
//   try {
//     const user = await getOne(userDetails.email);
//     const matches = await bcrypt.compare(userDetails.password, user.password);
//     if (!matches) {
//       throw {
//         code: 404,
//         message: "Invalid password",
//       };
//     }

//     return user;
//   } catch (error) {
//     throw {
//       code: 404,
//       message: "Couldn't find user",
//     };
//   }
// };

// module.exports = {
//   create,
//   getOne,
//   getAll,
//   login,
//   getOneById,
// };
