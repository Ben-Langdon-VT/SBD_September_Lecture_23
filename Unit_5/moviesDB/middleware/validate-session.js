const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
require('dotenv').config();

const validateSession = async (req,res,next) => {
    try {
        
        //Middleware still has access to the request, response, and requires the next() function to move past it.

        //* remember the timeLog() helper within the ToDo_List

        //1. Take token provided by request object (header.authorization)

        const token = req.headers.authorization;
        console.log("Token:",token);
        
        //2 check state of the token (expired?)
        const decoded = await jwt.verify(token, process.env.JWT);
        console.log(decoded);

        //3. Provide response - if valid, generate a variable that holds user info
        const user = await User.findById(decoded.id);
        console.log(user);
        if(!user) throw new Error(`User not found`);
        
        req.user = user;
        return next();
    } 
    catch (err) {
        res.json({message: err.message})
    }
}

module.exports = validateSession;