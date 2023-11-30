function logTime(req, res, next) {
    // console.log(req);

    let date = new Date();
    req.datePosted = date.toLocaleDateString();

    console.log('DatePosted:', req.datPosted());

    next();
}

module.exports = {
    logTime: logTime,
}

