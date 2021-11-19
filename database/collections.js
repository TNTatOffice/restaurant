const mongoose = require("mongoose");
var url = "mongodb://localhost:27017/burgersv";

mongoose.connect(url);

var usersCollection = mongoose.model("Users", mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String
}));



module.exports = {usersCollection}