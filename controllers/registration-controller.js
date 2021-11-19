const express = require("express");
const app = express();
var registrationManager = require('../managers/registration-manager.js');


const register = async (req, res) => {

  // valid is an array of issuesm, user is the user object if we successfully created him
  const result = { errors: [], user: null };

  const errors = registrationManager.validateUser(req.body);

  // if errors were found, return the issues and don't create the user
  if (errors.length > 0) {
    result.errors = errors;
    return res.json(result);
  }
    
  // create user in db
  const user = await registrationManager.createUser(req.body);
  result.user = user;

  return res.json(result);  
};

module.exports = {register};