const express = require("express");
const app = express();
const signInManager = require('../managers/signIn-manager.js');

const signIn = async (req, res) => {

    // valid is an array of issuesm, user is the user object if we successfully created him
    const result = { errors: [], user: null };

    // Todo: check if password is ok, email not empty gmail/yahoo
      
    // create user in db
    const user = await signInManager.signIn(req.body.email, req.body.password);
    result.user = user;

    if (!user)
        return res.json({errors: ["email or password doesnt exist"]})

    console.log(result)
  
    return res.json(result)
  };
  
  module.exports = {signIn};