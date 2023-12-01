const express = require('express'); // being pulled from node_modules.
const app = express(); // simplifying method call
const PORT = 4000; // server port within localhost. using 'ALL CAPS' to indicate a general variable.


//* Includes
const practiceController = require('./Controllers/practice.controller');
const authController = require('./Controllers/auth.controller');
const {logTime} = require("./utils");
const routeController = require('./Controllers/route.controller');

//* Middleware
app.use(logTime);
app.use(express.urlencoded()); // parse the body from our browser so it can display the response.
app.use(express.json());//Allows access to json in our routes
app.use(express.static(`${__dirname}/public`));
// console.log('pathway: ', __dirname);

app.use('/practice', practiceController);
app.use('/todo', authController);
app.use('/route', routeController);
/* 
    Any traffic coming in that has "practice after localhost:4000 will route to practice.controller.js"
    ex: localhost:4000/practice
*/
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
    //Provides us feedback that it is running.
});

