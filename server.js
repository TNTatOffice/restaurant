// creating localhost on port 3000
const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require ('mongoose');
bodyParser = require("body-parser");
app.use("/", express.static("public"));

// route to home page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

// route to sign in page
app.get("/login", (req, res) => {
  return res.sendFile(__dirname + "/signIn.html");
});

// route to sign up page
app.get("/signup", (req, res) => {
  return res.sendFile(__dirname + "/signUp.html");
});

// mongoose URL connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/SVBurgerDB'); 
const db = mongoose.connection;
db.once('open', () => {console.log('SVBurgerDB is connected')});
db.on('error', console.log.bind(console,'error in DB connection'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// creating post 
app.post('/api/user', (req,res) => {
const saveUser = new userSchema(req.body)
saveUser.save((error,savedUser) => {
if(error) throw error
res.json(savedUser)
})
})

// server active
app.listen(PORT);
console.log(`server is active`);
