const UserModel = require("./model");
//const bcrypt = require("bcryptjs");
const storeUser = async (userData) => {
  try {
    const user = new UserModel(userData);
    console.log(userData);
    await user.save();
  } catch (err) {
    throw "failed to create user";
  }
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
module.exports = { storeUser };
// module.exports = {
//   create,
//   getOne,
//   getAll,
//   login,
//   getOneById,
// };
