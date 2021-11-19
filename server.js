// creating localhost on port 3000
const express = require("express");
const app = express();
const PORT = 3000;
bodyParser = require("body-parser");
app.use (express.static('public'));
app.use(express.json());
const registrationController = require('./controllers/registration-controller.js')
const signInController = require('./controllers/signIn-controller.js')


// route to home page
app.get("/", (req, res) => {
  return res.sendFile(__dirname + "/public/login.html");
});

app.post("/register", registrationController.register);
app.post("/user-login", signInController.signIn);


// route to sign in page
app.get("/login", (req, res) => {
  return res.sendFile(__dirname + "/public/signIn.html");
});

// route to sign up page
app.get("/signup", (req, res) => {
  return res.sendFile(__dirname + "/public/signUp.html");
});

// route to menu
app.get("/menu", (req,res) => {
  return res.sendFile(__dirname + "/public/menu.html");
});

// server active
app.listen(PORT);
console.log(`server is active`);
