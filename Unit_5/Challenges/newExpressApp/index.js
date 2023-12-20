//Standard includes
const express = require('express');
const app = express();
const PORT = 4000;

//routers
const controller = require('./controllers/book.controller');
//middleware functions
const { timeStamp } = require('./utils');

app.use(timeStamp);
app.use(express.urlencoded());
app.use(express.json());


//* Controller
app.use('/books', controller);


//* Actually listen to internet traffic
app.listen(PORT, () => {`1`
    console.log(`Server is running on port: ${PORT}`);
    // Provides us feedback that it is running.
})