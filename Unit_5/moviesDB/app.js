//* odd config function
require('dotenv').config();

//* Includes
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const PORT = Number(process.env.PORT);
const MONGO = process.env.MONGODB;

//* Databases
mongoose.connect(`${MONGO}/movies`);
const db = mongoose.connection;

//* Routers
const userController = require('./controllers/user.controller');
const movieController = require('./controllers/movie.controller');


//* Middleware
app.use(express.urlencoded());
app.use(express.json());
db.once("open", () => console.log(`Connection: ${MONGO}/movies`));


//* Controller
app.use('/user', userController);
app.use('/movies', movieController);


app.listen(PORT, () => console.log(`Movies: ${PORT}`));

