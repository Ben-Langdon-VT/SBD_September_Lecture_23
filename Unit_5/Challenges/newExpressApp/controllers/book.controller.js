const router = require('express').Router();
const data = require('../data.json');


const handleErrors = (err,req,res) => {
    res.status(500).json({
        error: err.message,
        timestamp: req.timestamp
    });
}

//Base Route
router.get('/', (req, res) => {
    try {

        res.status(200).json({
            results: data,
            timestamp: req.timestamp
        });

    } catch (err) {
        handleErrors(err, req, res);
    }
});
//Search By Id
router.get('/id/:id', (req, res) => {
    try {
        const { id } = req.params;
        let result = data.find(i => i.id == id);

        if (result) {
            res.status(200).json({
                results: result,
                timestamp: req.timestamp
            });
        }
        else {
            throw new Error(`/id/ no book with id ${id}`);
        }
    }
    catch (err) {
        handleErrors(err, req, res);
    }
});

//Search By Title Name
router.get('/query', (req, res) => {
    try {
        const { title, author } = req.query;
        let book = undefined;
        if (title && author) {
            book = data.find(book => (book.title == title && book.author == author));
        }
        else if (title){
            book = data.find(book => book.title == title);
        }
        else if (author){
            book = data.find(book => book.author == author);
        }
        else{
            throw new Error("/query/ needs params 'title' and/or 'author'");
        }

        if (book) {
            res.status(200).json({
                results: book,
                timestamp: req.timestamp
            });
        }
        else {
            throw new Error("/query/ No book found matching params");
        }

    }
    catch (err) {
        handleErrors(err, req, res);
    }
})

//Add entry
//sort of do not need to edit db.json
router.post('/post/', (req, res) => {
    try {
        const { title, author } = req.query;
        if (title && author) {
            const success = `Successfully added book Title: ${title}, Author: ${author} (not actually tho)`
            console.log(success);
            res.status(200).json({
                message: success,
                timestamp: req.timestamp
            })
        }
        else {
            throw new Error("/post/ missing params 'title' and / or 'author'");
        }
    }
    catch (err) {
        handleErrors(err, req, res);
    }
});

module.exports = router;