const collections = require('../database/collections.js')

const signIn = async (email, password) => {

    const user = await collections.usersCollection.findOne({ email: email, password: password }).exec();
    console.log(user)
    return user;
};


module.exports = {signIn};