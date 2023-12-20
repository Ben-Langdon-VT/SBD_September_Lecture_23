const router = require('express').Router();
const Movie = require('../models/movie.model');
const ObjectId = require('mongoose').Types.ObjectId;
const { errorResponse } = require('../utils');

//TODO POST

router.post('/', async (req, res) => {
    try {
        //1. pull data from client(body)
        // console.log(req);

        const { title, genre, rating, length, releaseYear } = req.body;
        if (title === undefined || rating === undefined || length === undefined) {
            throw new Error(`/movie/post missing title: ${title}, rating: ${rating}, or length: ${length}`);
        }


        //2. Create a new object using the model

        const movie = new Movie({
            title,
            genre,
            rating,
            length,
            releaseYear
        })

        //3. save the object to the DB

        const newMovie = await movie.save();

        //4. response to client

        res.status(200).json({
            message: `${newMovie.title} added to collection`,
            newMovie
        })

    }
    catch (err) {
        errorResponse(res, err);
    }
});

//TODO GET All
router.get('/', async (req, res) => {
    try {
        /* 
        !   Challenge
        - No special endpoint necessary
        - Response should consider
            - If found
            - not found
        - Test the route within Postman
        
        Docs: https://www.mongodb.com/docs/manual/reference/method/db.collection.find/
        
        Hint: parameters within method are optional
        */

        const all = await Movie.find();
        // console.log(all);
        if (all.length > 0) {
            res.status(200).json({
                result: all
            });
        }
        else {
            throw new Error("No movies found");
        }

    }
    catch (err) {
        errorResponse(res, err)
    }
});

//TODO GET One
router.get('/id/:id', async (req, res) => {
    try {
        /* 
        !   Challenge
        - By ID
        - Response should consider
            - If found
            - If no document found
        - Test the route within Postman
        
        Hint: Consider login within user.controller.js
        Docs: https://www.mongodb.com/docs/manual/reference/method/db.collection.findOne/
        */
        const { id } = req.params;
        const movie = await Movie.findOne({ _id: new ObjectId(id) });
        if (movie) {
            res.status(200).json({
                result: movie
            })
        }
        else {
            throw new Error(`no movie by id: ${id}`);
        }

    }
    catch (err) {
        errorResponse(res, err)
    }
});

//TODO Get All by Genre
router.get('/genre/:genre', async (req, res) => {
    try {
        /* 
        !   Challenge
                - No special endpoint necessary
                - Response should consider
                    - If found
                    - not found
                - Consider query casing within the endpoint.
                    - hint: conditional w/ looping
                - Test the route within Postman
        */
        const { genre } = req.params;
        let buildWord = "";
        if (genre) {
            for (let i = 0; i < genre.length; i++) {
                if (i === 0 || genre[i - 1] === '-' || genre[i-1] === '  ') {
                    buildWord += genre[i].toUpperCase();
                }
                else {
                    buildWord += genre[i].toLowerCase();
                }
            }
        }
        if (genre === "Cmdy") {
            buildWord = "Comedy";
        }
        const movies = await Movie.find({ genre: buildWord });
        // console.log(movies);
        if (movies.length > 0) {
            res.status(200).json({
                result: movies
            })
        }
        else {
            throw new Error(`No movies with genre:${genre}`);
        }
    } catch (err) {
        errorResponse(res, err)
    }
});

//TODO PATCH/PUT One

router.patch('/add', async (req, res) => {
    try {
        //pull value from parameter
        const { id } = req.param;
        //pull data from the body
        const info = req.body; 
        // use method to locate a document based off the ID and pass in new information.
        //* .findOneAndUpdate(query,document, options)
        const returnOptions = {new: true};
        const updated = await Movie.findOneAndUpdate({_id: new ObjectId(id)}, info, returnOptions);

        //respond to client
        res.status(200).json({
            result: updated
        });
    }
    catch (err) {
        errorResponse(res, err);
    }
});

//TODO DELETE One

router.delete('/:id', async (req, res) => {
    try {
        const {id} = body.params;

        const deleteMovie = await Movie.deleteOne({_id: new ObjectId(id)});
        console.log("Deleted movie: ", deleteMovie);

        if(deleteMovie.deletedCount){
            res.status(200).json({
                result: 'Movie Removed'
            });
        }
        else{
            res.status(404).json({
                result: 'No Movie Found by that Id'
            });
        }
    }
    catch (err) {
        errorResponse(res, err);
    }
});

module.exports = router;