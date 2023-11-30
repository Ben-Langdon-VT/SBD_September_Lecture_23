const router = require('express').Router(); // creating a vbariable --> import router engine from express


router.post('/register', (req, res) => {
    console.log("in Auth Controller", req.datePosted());
    console.log('body: ', req.body);

    try {
        const { firstName, lastName, email, password } = req.body;

        res.status(200).send({
            fullname: `${firstName} ${lastName}`,
            email: email,
            password: password,
            date: req.datePosted,
        });
    }
    catch {
        res.status(200).send('<img src="https://http.cat/500" alt = "status code 500">');
    }
});
// router.


module.exports = router;