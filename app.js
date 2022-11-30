const { json } = require("express");
const express = require("express"); // brining express js code so that we can use it
const path = require("path"); // path is a built in library, gives functions that can work with file system
const bodyParser = require("body-parser");
const { getConnection } = require("./db/db.js"); // our data base driver
const userService = require("./user_module/service.js");
const app = express(); // creating an express app, an object that contains all of the express logic
const port = 8484; // port, hard coded number of the port we want express to look into
console.log("inside app.js");
// it parses the body of HTTP request to a JS object that we can use
// const { engine } = require("express-handlebars"); // bring in handelbars function

//const cookieParser = require("cookie-parser");
// const { auth } = require("../users_module/auth");

app.use(express.static(path.join(__dirname, "client/public")));
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
// const students = [];
// app.use((req, res, next) => {
//   console.log("arequest came in middleware");
//   console.log(req.path);
//   console.log(req.method);
//   next();
// });

/* defining routes */
app.get("/", (req, res) => {
  console.log("accessing route /, METHOD = GET");
  // __dirname, is a nodejs built in variable representing the current directory where code is ran
  res.sendFile(path.join(__dirname, "client/index.html")); // responding to a request with a file
});

app.get("/about", (req, res) => {
  console.log("accessing route /, METHOD = GET");
  // __dirname, is a nodejs built in variable representing the current directory where code is ran
  res.sendFile(path.join(__dirname, "client/about.html")); // responding to a request with a file
});

app.get("/blog", (req, res) => {
  console.log("accessing route /, METHOD = GET");
  // __dirname, is a nodejs built in variable representing the current directory where code is ran
  res.sendFile(path.join(__dirname, "client/blog.html")); // responding to a request with a file
});

app.get("/contact", (req, res) => {
  console.log("accessing route /, METHOD = GET");
  // __dirname, is a nodejs built in variable representing the current directory where code is ran
  res.sendFile(path.join(__dirname, "client/contact.html")); // responding to a request with a file
});

app.get("/course", (req, res) => {
  console.log("accessing route /, METHOD = GET");
  // __dirname, is a nodejs built in variable representing the current directory where code is ran
  res.sendFile(path.join(__dirname, "client/course.html")); // responding to a request with a file
});

app.get("/loginstaff", (req, res) => {
  console.log("accessing route /, METHOD = GET");
  // __dirname, is a nodejs built in variable representing the current directory where code is ran
  res.sendFile(path.join(__dirname, "client/loginstaff.html")); // responding to a request with a file
});

app.get("/login", (req, res) => {
  console.log("accessing route /login, METHOD = GET");
  res.sendFile(path.join(__dirname, "client/login.html"));
});
app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "client/signup.html"));
});
app.post("/signup", async (req, res) => {
  console.log("we got new user");
  console.log(req.body);
  try {
    await userService.storeUser(req.body);
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
  await getConnection();
  console.log("connected to DB");
});

// exporting app so vercel can access it
module.exports = app;
//   try {
//     // object destruction, taking fields out of an object as a variable
//     const { userId, token } = await userService.login(body);
//     if (userId && token) {
//       //res.cookie("token", token, { maxAge: 900000 });
//       res.status(200).json({
//         userId,
//         token,
//       });
//     }
//   } catch (error) {
//     console.log("caught error in controller");
//     console.log(error);
//     res.status(error.code).json({
//       error: error.msg,
//     });
//   }
// });

// app.post("/login", async (req, res) => {
//   console.log("we are in login");
//   console.log(req.body);
//   const userInfo = req.body;
//   let loggedIn = false;
//   await students.map((student) => {
//     if (
//       student.email === userInfo.email &&
//       student.password === userInfo.password
//     ) {
//       loggedIn = true;
//     }
//   });
//   res.json({
//     loggedIn,
//   });
// });

//students.push(req.body);
//   try {
//     await userService.storeUser(req.body);
//   } catch (error) {
//     res.status(error.code).json({
//       error: error.msg,
//     });
//     return;
//   }
//   // res.status, sets the status of the response
//   // json will send json data as the response body
// res.json({
//   message: "user created sucessfully",
// });

// app.get("/students", (req, res) => {
//   res.json(students);
// });

// app.get("/user/:email", (req, res) => {
//   const user = userService.getUser(req.params.email);
//   res.render("profile", {
//     layout: "profile",
//     name: user.name,
//     email: user.email,
//     address: user.address,
//     dob: user.dob,
//     bio: user.bio,
//   });
// });

// app.get("/dashboard", auth, async (req, res) => {
//   try {
//     const user = await userService.getUserById(req.userId);
//     res.render("dashboard", {
//       layout: "profile",
//       name: user.name,
//       email: user.email,
//       course: user.course,
//       address: user.address,
//       dob: user.dob,
//       bio: user.bio,
//     });
//   } catch (error) {
//     res.redirect("/login");
//     res.end();
//     return;
//   }
// });

// telling express to start listening on the given port (first parameter), when its listening it will
// run the next call back
