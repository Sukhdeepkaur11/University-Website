const mongoose = require("mongoose"); // bring in mongoose code
let connection = undefined; // connection

/**
 * this function looks for an existing data base connection
 * if one is found, returns existing, if not creates a new connection and returns it
 * @returns
 */
const getConnection = async () => {
  if (connection) {
    console.log("returning existing connection");
    return connection;
  } else {
    console.log("creating new connection");
    connection = await mongoose.connect(
      "mongodb+srv://bsukhi11:B@idwan01@cluster0.jzir3o1.mongodb.net/test"
    );
    return connection;
  }
};

module.exports = {
  getConnection,
  mongoose,
  Schema: mongoose.Schema,
};
