const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    //column for our document
    firstName: {
        type: String, //what datatype this is expecting
    },
    lastName: {
        type: String, //what datatype this is expecting
    },
    email: {
        type: String, //what datatype this is expecting
        required: true, //default to false
    },
    password: {
        type: String, //what datatype this is expecting
        required: true, //default to false
    },
});

module.exports = mongoose.model('User', UserSchema);