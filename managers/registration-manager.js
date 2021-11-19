const collections = require('../database/collections.js')
var ObjectID = require('mongodb').ObjectID;


const validateUser = (user) => {
    var result = [];

    if (!user) {
        result.push("bad_arguments");
        return result;
    }

    // first and last name check
    if (user.first_name.length < 2) {
        result.push('Your first name is too short');
    }
    if (user.first_name.length > 20) {
        result.push('Your first name is too long');
    }
    if (user.last_name.length < 2) {
        result.push('Your last name is too short');
    }
    if (user.last_name.length > 20) {
        result.push('Your last name is too long');
    }
    // verify email- check why not working properly
    if (user.email.indexOf('gmail') == -1 && user.email.indexOf('yahoo') == -1) {
        result.push('Your email must be a Gmail or Yahoo address');
    }
    
    if (user.password.indexOf('!', '@', '#', '$', '%', '^', '&', '*', '(', ')') == -1) {
        result.push('Your password must include a special character');
    }
    if (user.password !== user.confirm_password) {
        result.push('Your password does not match');
    }

    return result;


}

const createUser = async (user) => {
    user.Id = new ObjectID();
    await collections.usersCollection.insertMany([user]);
    return user;
}

module.exports = {validateUser, createUser};
