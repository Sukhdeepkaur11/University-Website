const { json } = require("express");
const express = require("express"); // brining express js code so that we can use it
const path = require("path"); // path is a built in library, gives functions that can work with file system
const bodyParser = require("body-parser");
const { getConnection } = require("./db/db.js"); // our data base driver
const {
  storeUser,
  storeMessage,
  storeComment,
  getUser,
  login,
} = require("./user_module/service.js");
const app = express(); // creating an express app, an object that contains all of the express logic
const port = 8484; // port, hard coded number of the port we want express to look into
console.log("inside app.js");

// it parses the body of HTTP request to a JS object that we can use
// const { engine } = require("express-handlebars"); // bring in handelbars function

//const cookieParser = require("cookie-parser");
// const { auth } = require("../users_module/auth");

app.use(express.static(path.join(__dirname, "/client/public")));
app.use(bodyParser.urlencoded({ extended: true }));
// for every request, include these static files in the response
app.use(bodyParser.json()); // we want to use body-parses as a middelware

// app.engine("handlebars", engine());
// app.set("views", "./views");
// app.set("view engine", "handlebars"); // tell express we want to use handelbars as our engine
// // app.engine('handlebars', handlebars({
// //     layoutsDir: __dirname + '/views/layouts',
// // })); // set the templating engine to handelbars and tell handel bars where to find the templates/layouts

//app.use(cookieParser());

/* defining routes */
app.get("/", (req, res) => {
  console.log("accessing route /, METHOD = GET");
  // __dirname, is a nodejs built in variable representing the current directory where code is ran
  res.sendFile(path.join(__dirname, "index.html")); // responding to a request with a file
});

app.get("/about", (req, res) => {
  console.log("accessing route /, METHOD = GET");
  // __dirname, is a nodejs built in variable representing the current directory where code is ran
  res.sendFile(path.join(__dirname, "about.html")); // responding to a request with a file
});

app.get("/course", (req, res) => {
  console.log("accessing route /, METHOD = GET");
  // __dirname, is a nodejs built in variable representing the current directory where code is ran
  res.sendFile(path.join(__dirname, "course.html")); // responding to a request with a file
});

app.get("/loginstaff", (req, res) => {
  console.log("accessing route /, METHOD = GET");
  //const cookies = req.cookies;
  //console.log(cookies);
  // __dirname, is a nodejs built in variable representing the current directory where code is ran
  res.sendFile(path.join(__dirname, "loginstaff.html")); // responding to a request with a file
});

app.get("/loginstaff2", (req, res) => {
  console.log("accessing route /, METHOD = GET");
  //const cookies = req.cookies;
  //console.log(cookies);
  // __dirname, is a nodejs built in variable representing the current directory where code is ran
  res.sendFile(path.join(__dirname, "loginstaff2.html")); // responding to a request with a file
});

//BLOG ROUTES
app.get("/blog", (req, res) => {
  console.log("accessing route /, METHOD = GET");
  // __dirname, is a nodejs built in variable representing the current directory where code is ran
  res.sendFile(path.join(__dirname, "blog.html")); // responding to a request with a file
});
app.post("/blog", async (req, res) => {
  console.log("we got new message");
  console.log(req.body);
  try {
    await storeComment(req.body);
    res.status(200).json({
      message: "Comment sent successfully",
    });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
});

//CONTACT ROUTES
app.get("/contact", (req, res) => {
  console.log("accessing route /, METHOD = GET");
  // __dirname, is a nodejs built in variable representing the current directory where code is ran
  res.sendFile(path.join(__dirname, "contact.html")); // responding to a request with a file
});
app.post("/contact", async (req, res) => {
  console.log("we got new message");
  console.log(req.body);
  try {
    await storeMessage(req.body);
    res.status(200).json({
      message: "Message sent successfully",
    });
  } catch (err) {
    res.status(400).json({
      error: err,
      // "Failed to send message",
    });
  }
});

//LOGIN ROUTES
app.get("/login", (req, res) => {
  console.log("accessing route /login, METHOD = GET");
  res.sendFile(path.join(__dirname, "client/login.html"));
});

app.post("/login", async (req, res) => {
  console.log("we are in login");
  console.log(req.body);
  const body = req.body;

  if (
    !req.body.email ||
    !req.body.password ||
    !req.body.email.includes("@") ||
    req.body.password.length === 0
  ) {
    res.status(400).json({
      error: "Invalid user Information",
    });
    return;
  }
  try {
    //let isTeacher;
    const user = await login(req.body);
    console.log(user);
    //console.log(isTeacher);
    console.log(req.body);
    if (user) {
      res.send({
        userId: user._id,
        isTeacher: user.isTeacher,
      });
    }
  } catch (error) {
    console.error("caught error in controller:", error);
    res.status(400).json({
      error: error,
    });
  }
});

//SIGNUP ROUTES
app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "signup.html"));
});
app.post("/signup", async (req, res) => {
  console.log("we got new user");
  console.log(req.body);
  try {
    await storeUser(req.body);
    res.status(200).json({
      message: "user created successfully",
    });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
});

app.listen(port, async () => {
  console.log("Listening on port: " + port);
  try {
    await getConnection();
  } catch (error) {
    console.log(error);
  }

  console.log("connected to DB");
});

// exporting app so vercel can access it
module.exports = app;
