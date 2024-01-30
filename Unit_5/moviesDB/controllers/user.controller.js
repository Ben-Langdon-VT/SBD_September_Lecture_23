const router = require('express').Router();
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET = process.env.JWT;

/* ! Challenge
    - Add a boilerplate code for the controller
    - Create a POST method route ('/signup')
    - Make sure route is working
        - simple response of "Connected"
    - full URL is:
        - localhost:4005/user/signup
*/
const testingBcrypt = string => {
    // console.log("String:", string);
    let encrypt = bcrypt.hashSync(string,13);
    // console.log("Encrypt:", encrypt);
    return encrypt;
}


router.post('/signup', async(req,res) => {

    // testingBcrypt("password");
    // testingBcrypt("password");
    // testingBcrypt("passwordasdgf");
    
    
    try{
        // console.log("test1");
        const user = new User({
            firstName: req.body.first ? req.body.first : 'please update first name',
            lastName: req.body.last ? req.body.last : 'please update first name',
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password.toString() , 13)
        })

        const newUser = await user.save();


        const token = jwt.sign({message: 'hello'}, SECRET, {expiresIn: 60*60*24});
        // console.log("test2");
        res.send({
            user: newUser,
            message: "success",
            token
        });
    }
    catch(err){
        res.status(500).json({
            error: err.message
        })
    }
});

router.post( '/login', async(req,res) => {
    try{
        // 1 Capture data provided by user
        const {email, password} = req.body;

        // 2 check database to see if email exists
        const user = await User.findOne({email: email});

        // 3 if email exists, consider if the password matches
        console.log(user);
        if(!user) throw new Error("Email or Password does not match");

        const passwordMatch = await bcrypt.compare(password, user.password);

        console.log(passwordMatch);

        if(!passwordMatch) throw new Error("Email or Password does not match");

        // if it does, set up token
        const token = jwt.sign({id: user._id}, SECRET, {expiresIn: 60*60*24});
        // console.log("test2");

        //respond
        res.send({
            user,
            message: "success",
            token
        });
    }
    catch(err){
        //errors
        res.status(500).json({
            ERROR: err.message
        });
    }
})

module.exports = router;