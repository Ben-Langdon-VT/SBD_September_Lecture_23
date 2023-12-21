const mongoose = require('mongoose');
/* 
! Challenge
    - Create a Schema called MovieSchema
    - Properties within:
        "title": string, required
        "genre": string
        "rating": string, required
        "length": number, required
        "releaseYear": number
        
    Note:
        Consider how the User model was created.
*/


const MovieSchema = new mongoose.Schema({
    //column for our document
    title: {
        type: String, //what datatype this is expecting
        required: true
    },
    genre: {
        type: String, //what datatype this is expecting
    },
    rating: {
        type: String, //what datatype this is expecting
        required: true, //default to false
    },
    length: {
        type: Number, //what datatype this is expecting
        required: true, //default to false
    },
    releaseYear : {
        type: Number
    },
    owner_id: {
        type: String,
    }
});

module.exports = mongoose.model('Movie', MovieSchema);